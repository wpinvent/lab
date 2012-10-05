using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Lab.Lib.Mvc.Razor
{
    public static class HtmlHelperExtentions
    {
        public static string ConvertToJson(this HtmlHelper helper, object o)
        {
            return JsonConvert.SerializeObject(o, new IsoDateTimeConverter());
        }
    }
}
