using Fushigi.Bfres;
using Fushigi.Byml;
using Fushigi.Byml.Writer;
using Fushigi.param;
using Fushigi.util;
using ImGuiNET;
using System.Diagnostics.CodeAnalysis;

namespace Fushigi.course
{

    public class FushigiCursor
    {
      
        public FushigiCursor()
        {
            mTranslate = new System.Numerics.Vector3(0.0f);
            delta = 0;
        }

        public System.Numerics.Vector3 mStartingTrans;
        public System.Numerics.Vector3 mTranslate;
        public float delta;
    }
}
