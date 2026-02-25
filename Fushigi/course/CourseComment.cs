using Fushigi.Byml;
using Fushigi.Byml.Writer;
using Fushigi.param;
using Fushigi.util;
using ImGuiNET;
using System.Diagnostics.CodeAnalysis;

namespace Fushigi.course
{

    public class CourseComment
    {
        public CourseComment(BymlHashTable commentNode)
        {
            mTranslation = BymlUtil.GetVector3FromArray(commentNode["Translate"] as BymlArrayNode);
            mText = BymlUtil.GetNodeData<string>(commentNode["Text"]);
            mCommentNum = 0;
        }

        public CourseComment()
        {
            mCommentNum++;
            mText = "";
            mTranslation = new System.Numerics.Vector3(0.0f);
            mOpened = false;
        }


        //public BymlHashTable BuildNode(CourseLinkHolder linkHolder)
        //{
        //    BymlHashTable table = new();
        //    table.AddNode(BymlNodeId.UInt, BymlUtil.CreateNode<uint>(mAreaHash), "AreaHash");
        //    table.AddNode(BymlNodeId.String, BymlUtil.CreateNode<string>(mPackName), "Gyaml");
        //    table.AddNode(BymlNodeId.UInt64, BymlUtil.CreateNode<ulong>(mHash), "Hash");
        //    table.AddNode(BymlNodeId.String, BymlUtil.CreateNode<string>(mLayer), "Layer");
        //    table.AddNode(BymlNodeId.String, BymlUtil.CreateNode<string>(mName), "Name");


         

        //    BymlArrayNode rotateNode = new(3);
        //    rotateNode.AddNodeToArray(BymlUtil.CreateNode<float>(mRotation.X));
        //    rotateNode.AddNodeToArray(BymlUtil.CreateNode<float>(mRotation.Y));
        //    rotateNode.AddNodeToArray(BymlUtil.CreateNode<float>(mRotation.Z));


        //    return table;
        //}


       
        public string mText;
        public string mLayer;
        public bool mOpened;
        public System.Numerics.Vector3 mStartingTrans;
        public System.Numerics.Vector3 mTranslation;

        public int mCommentNum;
     

    public class CourseCommentHolder
    {
        public CourseCommentHolder()
        {

        }

        public CourseCommentHolder(BymlArrayNode commentArray)
        {
            foreach (BymlHashTable comment in commentArray.Array)
                mComments.Add(new CourseComment(comment));
        }


        //public BymlArrayNode SerializeToArray(CourseLinkHolder linkHolder)
        //{
        //    BymlArrayNode node = new((uint)mComments.Count);

        //    foreach (CourseActor actor in mActors)
        //    {
        //        node.AddNodeToArray(actor.BuildNode(linkHolder));
        //    }

        //    return node;
        //}




        public List<CourseComment> mComments = [];
    }


    }
}
