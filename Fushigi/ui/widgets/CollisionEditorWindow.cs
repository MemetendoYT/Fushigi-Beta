using Fushigi.course;
using Fushigi.env;
using Fushigi.ui.modal;
using ImGuiNET;
using Silk.NET.OpenGL;
using System.Numerics;

namespace Fushigi.ui.widgets
{
    public class EnvCollisionEditor
    {
        public EnvCollisionEditor() { }



        public void Load(GL gl, AreaParam areaParam, EnvPalette envPalette)
        {
           

        }
      
        internal void Draw(ref bool continueDisplay, IPopupModalHost modalHost, Vector2 size, double deltaSeconds, LevelViewport Viewport)
        {
            ImGui.SetNextWindowSize(new Vector2(900 * MainWindow.dpiScale, 500 * MainWindow.dpiScale), ImGuiCond.Once);

            bool open = ImGui.Begin("Colission Window", ImGuiWindowFlags.NoCollapse);

            if (open)
            {
                //if (ImGui.Button("Close"))
                  //  continueDisplay = false;


                //if (ImGui.BeginTabBar("EnvTabs"))
                //{

                //    if (ImGui.BeginTabItem("Components"))
                //    {

                //        ImGui.EndTabItem();
                //    }

                //    ImGui.EndTabBar();
                //}

                //Viewport.DrawSimple(size, deltaSeconds);
            }

            ImGui.End();        


        }
    }
}