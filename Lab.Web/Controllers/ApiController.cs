using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Lab.Data;

namespace Lab.Web.Controllers
{
    public class ApiController : Controller
    {
        protected LabDbContext db;

        public ApiController()
        {
            db = new LabDbContext();
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
