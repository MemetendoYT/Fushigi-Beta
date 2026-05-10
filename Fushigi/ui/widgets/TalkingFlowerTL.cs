using Fushigi.Byml;
using Fushigi.course;
using Fushigi.gl;
using Fushigi.param;
using Fushigi.ui.modal;
using Fushigi.util;
using ImGuiNET;
using Newtonsoft.Json.Linq;
using Silk.NET.Input;
using Silk.NET.SDL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Text.Json;
using System.Runtime.CompilerServices;

namespace Fushigi.ui.widgets
{
    class TalkingFlower
    {
        public static Dictionary<string, string> VoiceLines { get; private set; }
        public static string SearchText = "";
        public static string SelectedMessage = "";
        private static bool FlowerSelected;
        public static void LoadTL()
        {
            var json = File.ReadAllText("res/Voicelines.json");
            VoiceLines = JsonSerializer.Deserialize<Dictionary<string, string>>(json);
        }

        public static void Draw(ref bool continueDisplay, IPopupModalHost modalHost, CourseAreaEditContext ctx)
        {
            LoadTL();
            ImGui.SetNextWindowSize(new Vector2(500 * MainWindow.dpiScale, 500 * MainWindow.dpiScale), ImGuiCond.Once);

            // Window
            if (ImGui.Begin("Talking Flower Voicelines", ImGuiWindowFlags.NoCollapse))
            {

                // Close Button
                if (ImGui.Button("Close"))
                    continueDisplay = false;

                var actors = ctx.GetSelectedObjects<CourseActor>().ToArray();
                FlowerSelected = actors.Any(actor => actor.mPackName.StartsWith("ObjectTalkingFlower"));

                bool shift = ImGui.GetIO().KeyShift;
                if (!string.IsNullOrEmpty(SelectedMessage))
                {
                    foreach (var actor in actors)
                    {
                        if (!actor.mPackName.StartsWith("ObjectTalkingFlower"))
                            continue;
                        string key = (shift && actor.mActorParameters.ContainsKey("SubMessageList")) ? "SubMessageList" : "MessageList";

                        if (actor.mActorParameters.ContainsKey(key))
                        {
                            actor.mActorParameters[key] = SelectedMessage;
                            Logger.Logger.LogMessage("TalkingFlowerTL", $"Changed {key} to {SelectedMessage} for {actor.mPackName}[{actor.mHash}]");
                        }
                    }
                    SelectedMessage = "";
                }

                ImGui.Text(actors.Any(actor => actor.mPackName.StartsWith("ObjectTalkingFlower")) ? "Double Click to apply to selected Talking Flower" : "Double Click to Copy");
                ImGui.Text("Search:");
                ImGui.SameLine();
                ImGui.InputText($"##Search", ref SearchText, 0x100);

                bool isSearch = !string.IsNullOrWhiteSpace(SearchText);

                ImGui.BeginChild("TLList");

                foreach (var TL in VoiceLines)
                {
                    bool HasText = TL.Value.IndexOf(SearchText, StringComparison.OrdinalIgnoreCase) >= 0 ||
                                   TL.Key.IndexOf(SearchText, StringComparison.OrdinalIgnoreCase) >= 0;

                    if (!HasText)
                        continue;

                    if (ImGui.BeginTable("##TL", 2, ImGuiTableFlags.BordersInnerV | ImGuiTableFlags.Resizable))
                    {
                        ImGui.TableNextRow();

                        float wrapWidth = ImGui.GetContentRegionAvail().X;
                        Vector2 textSize = ImGui.CalcTextSize(TL.Value, wrapWidth: wrapWidth);

                        ImGui.TableSetColumnIndex(0);

                        ImGui.Selectable(TL.Key, false,
                            ImGuiSelectableFlags.SpanAllColumns,
                            new Vector2(0, textSize.Y));

                        if (ImGui.IsItemHovered() && ImGui.IsMouseDoubleClicked(ImGuiMouseButton.Left))
                        {
                            if (FlowerSelected)
                                SelectedMessage = TL.Key;
                            else
                            {
                                ImGui.SetClipboardText(TL.Key);
                                Logger.Logger.LogMessage("TalkingFlowerTL", $"Copied {TL.Key} to the clipboard");
                            }
                        }

                        ImGui.TableNextColumn();
                        ImGui.BeginDisabled();
                        ImGui.TextWrapped(TL.Value);
                        ImGui.EndDisabled();

                        ImGui.EndTable();
                    }

                    ImGui.Separator();
                }

                ImGui.EndChild();
            }

            ImGui.End();

        }
    }
}