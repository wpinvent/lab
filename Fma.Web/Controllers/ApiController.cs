using System.Web.Mvc;
using Fma.Data;
using Fma.Lib.Mvc;

namespace Fma.Web.Controllers
{
    public class ApiController : Controller
    {
        protected FmaDbContext db;

        public ApiController()
        {
            db = new FmaDbContext();
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
