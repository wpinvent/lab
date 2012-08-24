using System;
using System.IO;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Web.Mvc;

namespace Lab.Web.Mvc
{
    public class DataContractSerializedJsonActionResult : ActionResult
    {
        public Object Data { get; private set; }

        public DataContractSerializedJsonActionResult(Object data)
        {
            this.Data = data;
        }

        public override void ExecuteResult(ControllerContext context)
        {
            var serializer = new DataContractJsonSerializer(this.Data.GetType());

            string output = String.Empty;

            using (var ms = new MemoryStream())
            {
                serializer.WriteObject(ms, this.Data);

                output = Encoding.Default.GetString(ms.ToArray());
            }

            context.HttpContext.Response.ContentType = "application/json";

            context.HttpContext.Response.Write(output);
        }
    }
}