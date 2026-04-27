using Fushigi.ui.modal;
using Fushigi.util;
using ImGuiNET;

namespace Fushigi.ui.widgets
{

    class RailConfirmationDialog : IPopupModal<RailConfirmationDialog.DialogResult>
    {
        public enum DialogResult
        {
            Yes,
            No,
            AutoDelete
        }

        public static async Task<DialogResult> ShowDialog(IPopupModalHost modalHost)
        {

            var result = await modalHost.ShowPopUp(new RailConfirmationDialog(), "Empty Rails",
                ImGuiWindowFlags.AlwaysAutoResize);

            if (result.wasClosed)
                return DialogResult.No;

            return result.result;
        }

        public void DrawModalContent(Promise<DialogResult> promise)
        {
            ImGui.Text("Your level contains empty rails, which can cause it to crash. \nDo you want to delete them and save?");
            ImGui.NewLine();

            float centerXButtons = (ImGui.GetWindowWidth() - ImGui.CalcTextSize("Yes No").X) * 0.45f;
            ImGui.SetCursorPosX(centerXButtons);
            if (ImGui.Button("Yes"))
                promise.SetResult(DialogResult.Yes);

            ImGui.SameLine();
            if (ImGui.Button("No"))
                promise.SetResult(DialogResult.No);

            bool deleteEmptyRails = UserSettings.GetDeleteEmptyRails();
            if (ImGui.Checkbox("Auto Delete Empty Rails on Save", ref deleteEmptyRails))
            {
                UserSettings.SetDeleteEmptyRails(deleteEmptyRails);
                promise.SetResult(DialogResult.AutoDelete);
            }

            Tooltip.Show("Automatically deletes empty rails when saving a level.");
        }
    }
}
