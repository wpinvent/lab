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

        public DataContractSerializedJsonActionResult DataContractSerializedJson(object model)
        {
            return new DataContractSerializedJsonActionResult(model);
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
