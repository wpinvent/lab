using System;
using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.Collections.Generic;

namespace Lab.Lib.Mvc
{
    public class JsonNetSerializedActionResult : ActionResult
    {
        public Object Data { get; private set; }

        public JsonNetSerializedActionResult(Object data)
        {
            this.Data = data;
        }

        public override void ExecuteResult(ControllerContext context)
        {
            var json = JsonConvert.SerializeObject(this.Data, new IsoDateTimeConverter());
            
            context.HttpContext.Response.ContentType = "application/json";

            context.HttpContext.Response.Write(json);
        }
    }
}