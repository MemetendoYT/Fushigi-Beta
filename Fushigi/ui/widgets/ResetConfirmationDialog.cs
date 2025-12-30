using Fushigi.ui.modal;
using Fushigi.util;
using ImGuiNET;

namespace Fushigi.ui.widgets
{

    class ResetConfirmationDialog : IPopupModal<ResetConfirmationDialog.DialogResult>
    {
        public enum DialogResult
        {
            Yes,
            No
        }

        public static async Task<DialogResult> ShowDialog(IPopupModalHost modalHost)
        {

            var result = await modalHost.ShowPopUp(new ResetConfirmationDialog(), "Clear Level",
                ImGuiWindowFlags.AlwaysAutoResize);

            if (result.wasClosed)
                return DialogResult.No;

            return result.result;
        }

        public void DrawModalContent(Promise<DialogResult> promise)
        {
            ImGui.Text("Do you want to reset the level?");
            ImGui.NewLine();

            float centerXButtons = (ImGui.GetWindowWidth() - ImGui.CalcTextSize("Yes No").X) * 0.4f;
            ImGui.SetCursorPosX(centerXButtons);
            if (ImGui.Button("Yes"))
                promise.SetResult(DialogResult.Yes);

            ImGui.SameLine();
            if (ImGui.Button("No"))
                promise.SetResult(DialogResult.No);
        }
    }
}
