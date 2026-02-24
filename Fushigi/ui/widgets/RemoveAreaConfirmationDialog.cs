using Fushigi.ui.modal;
using Fushigi.util;
using ImGuiNET;

namespace Fushigi.ui.widgets
{

    class RemoveAreaConfirmationDialog : IPopupModal<RemoveAreaConfirmationDialog.DialogResult>
    {
        public enum DialogResult
        {
            Yes,
            No
        }

        public static string message = "";

        public static async Task<DialogResult> ShowDialog(IPopupModalHost modalHost, string topMessage, string dialogue)
        {

            message = dialogue;
            var result = await modalHost.ShowPopUp(new RemoveAreaConfirmationDialog(), topMessage,
                ImGuiWindowFlags.AlwaysAutoResize);

            if (result.wasClosed)
                return DialogResult.No;

            return result.result;
        }

        public void DrawModalContent(Promise<DialogResult> promise)
        {
            ImGui.Text(message);
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
