using System.Web.Mvc;
using Lab.Data;
using Lab.Lib.Mvc;

namespace Lab.Web.Controllers
{
    public class ApiController : Controller
    {
        protected LabDbContext db;

        public ApiController()
        {
            db = new LabDbContext();
        }

        public JsonNetSerializedActionResult JsonNetSerializedJson(object model)
        {
            return new JsonNetSerializedActionResult(model);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }

            base.Dispose(disposing);
        }
    }
}
