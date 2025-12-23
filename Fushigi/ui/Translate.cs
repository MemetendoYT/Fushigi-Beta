using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Text.Json;
using System.Xml.Linq;

public static class Translate
{
    public static Dictionary<string, string> EnglishNames { get; private set; }
    public static Dictionary<string, string> ReverseMap { get; private set; }

    public static void LoadEnglishNames()
    {
        var json = File.ReadAllText("EnglishNames.json");
        EnglishNames = JsonSerializer.Deserialize<Dictionary<string, string>>(json);
        ReverseMap = EnglishNames.ToDictionary(
            kvp => kvp.Value,
            kvp => kvp.Key
        );
    }

    public static string FetchTranslatedName(string name)
    {
        if (Translate.EnglishNames.TryGetValue(name, out var translated))
        {
            return translated;
        }
        else
        {
            return name;
        }
    }

    public static string reverseTranslate(string name)
    {
        if (Translate.ReverseMap.TryGetValue(name, out var translated))
        {
            return translated;
        }
        else
        {
            return name;
        }
    }
    public static string translateHistoryData(string name)
    {
        string[] parts = name.Split(' ', StringSplitOptions.RemoveEmptyEntries);

        (string first, string last, string actor) = (parts[0], parts[1], parts[2]);
        if (parts.Length < 4)
        {
            string actorName = $"{first} {last} {(Translate.FetchTranslatedName(actor))}";
            return actorName;
        }
        else
        {
            return name;
        }

    }
}