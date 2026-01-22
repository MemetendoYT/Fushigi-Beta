using Fasterflect;
using Fushigi.Byml;
using Fushigi.env;
using Fushigi.gl;
using Fushigi.Logger;
using Fushigi.rstb;
using Fushigi.util;
using System.Text.RegularExpressions;

namespace Fushigi.course
{
    public class Course
    {
        public Course(string courseName)
        {
            mCourseName = courseName;
            mCourseInfo = new CourseInfo(courseName);
            mMapAnalysisInfo = new MapAnalysisInfo(courseName);
            mStageLoadInfo = new StageLoadInfo(courseName);
            mAreas = [];
            LoadFromRomFS();
        }
        public string GetName()
        {
            return mCourseName;
        }

        public void LoadFromRomFS()
        {
            var courseFilePath = FileUtil.FindContentPath(Path.Combine("BancMapUnit", $"{mCourseName}.bcett.byml.zs"));
            var stageParamFilePath = FileUtil.FindContentPath(Path.Combine("Stage", "StageParam", $"{mCourseName}.game__stage__StageParam.bgyml"));

            /* grab our course information file */
            Byml.Byml courseInfo = new Byml.Byml(new MemoryStream(FileUtil.DecompressFile(courseFilePath)));
            Byml.Byml stageParam = new Byml.Byml(new MemoryStream(File.ReadAllBytes(stageParamFilePath)));

            var stageParamRoot = (BymlHashTable)stageParam.Root;
            var root = (BymlHashTable)courseInfo.Root;


            IsOneAreaCourse = ((BymlNode<string>)stageParamRoot["Category"]).Data == "Course1Area";
            Console.WriteLine("setting isoneareacourse to " + IsOneAreaCourse + " " + courseFilePath + " " + stageParamFilePath);
   
                try
                {
                    mStageReferences = (BymlArrayNode)root["RefStages"];

                    for (int i = 0; i < mStageReferences.Length; i++)
                    {
                        string stageParamPath = ((BymlNode<string>)mStageReferences[i]).Data.Replace("Work/", "").Replace(".gyml", ".bgyml");
                        string stageName = Path.GetFileName(stageParamPath).Split(".game")[0];
                        mAreas.Add(new CourseArea(stageName, false));

                    }
                }
                catch
                {
                    mAreas.Add(new CourseArea(mCourseName, false));

                }

            if (root.ContainsKey("Links") && !IsOneAreaCourse)
            {
                if (root["Links"] is BymlArrayNode linksArr)
                {
                    mGlobalLinks = new(linksArr);
                    return;
                }
            }

            mGlobalLinks = new(new BymlArrayNode());
       
        }
        public void AddArea()
        {
            Console.WriteLine("Adding Area");
            int areaCount = mAreas.Count;
            var usedNumbers = new HashSet<int>();
            Console.WriteLine(mCourseName);
            string NewAreaName = "";
            string areaName = "";
            NewAreaName = mCourseName.Replace("_Course", "");
            if (areaCount != 1)
            {
                foreach (var area in mAreas)
                {
                    string name = area.GetName();

                    if (name.StartsWith(NewAreaName + "_Sub"))
                    {
                        string numStr = name.Substring((NewAreaName + "_Sub").Length);
                        if (int.TryParse(numStr, out int num))
                            usedNumbers.Add(num);
                    }
                }



                int nextNumber = 1;
                while (usedNumbers.Contains(nextNumber))
                    nextNumber++;

                areaName = $"{NewAreaName}_Sub{nextNumber}";

            }
            else if (areaCount == 1)
            {
                areaName = $"{NewAreaName}_Sub1";
            }

                string testPath = FileUtil.FindContentPath(Path.Combine("BancMapUnit", $"{areaName}.bcett.byml.zs"));
            bool overrideVanilla = File.Exists(testPath);
            mAreas.Add(new CourseArea(areaName, overrideVanilla));
            renameArea();

        }

        public void renameArea()
        {
            Console.WriteLine("removing area");
            Console.WriteLine(GetAreaCount());
            Console.WriteLine(IsOneAreaCourse);
            string oldAreaName = mAreas[0].mAreaName;
            if (GetAreaCount() > 1 && IsOneAreaCourse)
            {
                IsOneAreaCourse = false;
                Catergory = null;
                if (oldAreaName.EndsWith("_Course"))
                {
                    oldAreaName = mCourseName.Replace("_Course", "");
                    mAreas[0].mAreaName = oldAreaName + "_Main";
                    Console.WriteLine("updating area name to " + mAreas[0].mAreaName);
                }

            }
            else if (GetAreaCount() == 1 && !IsOneAreaCourse)
            {
                IsOneAreaCourse = true;
                Catergory = "Course1Area";

                if (oldAreaName.EndsWith("Main"))
                {
                    mAreas[0].mAreaName = oldAreaName.Replace("Main", "Course");
                    Console.WriteLine("updating area name to " + mAreas[0].mAreaName);
                }
                else
                {
                    oldAreaName = Regex.Replace(oldAreaName, "_Sub[0-9]+$", "");
                    oldAreaName = oldAreaName + "_Course";
                    Console.WriteLine(oldAreaName);
                    mAreas[0].mAreaName = oldAreaName;
                    Console.WriteLine("updating area name to " + mAreas[0].mAreaName);
                }
            }
        }
        public List<CourseArea> GetAreas() => mAreas;

        public CourseArea GetArea(int idx) => mAreas.ElementAt(idx);

        public CourseArea? GetArea(string name)
        {
            foreach (CourseArea area in mAreas)
                if (area.GetName() == name)
                    return area;

            return null;
        }

        public int GetAreaCount()
        {
            return mAreas.Count;
        }

        public void AddGlobalLink()
        {
            if (mGlobalLinks == null)
            {
                Logger.Logger.LogWarning("Course", "mGlobalLinks == null! (AddGlobalLink)");
                return;
            }

            CourseLink link = new("Reference");
            mGlobalLinks.mLinks.Add(link);
        }

        public void RemoveGlobalLink(CourseLink link)
        {
            if (mGlobalLinks == null)
            {
                Logger.Logger.LogWarning("Course", "mGlobalLinks == null! (RemoveGlobalLink)");
                return;
            }

            mGlobalLinks.mLinks.Remove(link);
        }

        public CourseLinkHolder? GetGlobalLinks()
        {
            return mGlobalLinks;
        }

        public void Save()
        {
            var rstbPath = Path.Combine(UserSettings.GetRomFSPath(), "System", "Resource");

            if (!Directory.Exists(rstbPath))
                Directory.CreateDirectory(rstbPath);

            string[] sizeTables = Directory.GetFiles(rstbPath);

            foreach (string path in sizeTables)
            {
                RSTB resource_table = new RSTB();
                resource_table.Load(Path.GetFileName(path));

 
                BymlHashTable stageParamRoot = new();

                stageParamRoot.AddNode(BymlNodeId.Array, new BymlArrayNode(), "Actors");

                //stageParamRoot.AddNode(BymlNodeId.Array, mArea.mLinkHolder.SerializeToArray(), "Links");
                stageParamRoot.AddNode(BymlNodeId.Array, mGlobalLinks.SerializeToArray(), "Links");
                
                BymlArrayNode refArr = new();

                foreach (CourseArea area in mAreas)
                {
                    string refPath = $"Work/Stage/StageParam/{area.GetName()}.game__stage__StageParam.gyml";
                    refArr.AddNodeToArray(BymlUtil.CreateNode(refPath));
                }

          
                stageParamRoot.AddNode(BymlNodeId.Array, refArr, "RefStages");

                var byml = new Byml.Byml(stageParamRoot);
                var mem = new MemoryStream();

                byml.Save(mem);
                string virtualPath = $"BancMapUnit/{mCourseName}.bcett.byml";
                resource_table.SetResource(virtualPath, (uint)mem.Length);

                string folder = Path.Combine(UserSettings.GetModRomFSPath(), "BancMapUnit");
                if (!Directory.Exists(folder))
                    Directory.CreateDirectory(folder);

                string levelPath = Path.Combine(folder, $"{mCourseName}.bcett.byml.zs");
                File.WriteAllBytes(levelPath, FileUtil.CompressData(mem.ToArray()));
                SaveAreas(resource_table);

                resource_table.Save();
            }
        }

        public CourseActor? ResolveActorByHash(ulong hash)
        {
            foreach (var area in mAreas)
            {
                var actor = area.GetActorByHash(hash);
                if (actor != null)
                    return actor;
            }
            return null;
        }

        //Added for saving the Course file for global links
        public void SaveGlobalLinks(RSTB resource_table, string folder)
        {
            if (!Directory.Exists(folder))
                Directory.CreateDirectory(folder);

            BymlHashTable root = new();
            
            root.AddNode(BymlNodeId.Array, mGlobalLinks.SerializeToArray(), "Links");

            if(mStageReferences != null)
            root.AddNode(BymlNodeId.Array, mStageReferences, "RefStages");

            var byml = new Byml.Byml(root);
            var mem = new MemoryStream();
            byml.Save(mem);

            var decomp_size = (uint)mem.Length;

            //Compress and save the course          
            string levelPath = Path.Combine(folder, $"{mCourseName}.bcett.byml.zs");
            File.WriteAllBytes(levelPath, FileUtil.CompressData(mem.ToArray()));

            //Update resource table
            // filePath is a key not an actual path so we cannot use Path.Combine
            resource_table.SetResource($"BancMapUnit/{mCourseName}.bcett.byml", decomp_size);
        }

        public void SaveAreas(RSTB resTable)
        {
            //Save each course area to current romfs folder
            foreach (var area in GetAreas())
            {
                Logger.Logger.LogMessage("Course", $"Saving area {area.GetName()}...");

                area.Save(resTable);
            }
        }


        readonly string mCourseName;
        readonly List<CourseArea> mAreas;
        BymlArrayNode mStageReferences;
        CourseLinkHolder? mGlobalLinks;
        public CourseInfo mCourseInfo;
        public MapAnalysisInfo mMapAnalysisInfo;
        public StageLoadInfo mStageLoadInfo;
        public static bool IsOneAreaCourse;
        public static string Catergory;
        public static bool updateStageParam;
    }
}
