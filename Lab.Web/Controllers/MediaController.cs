using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Lab.Web.ViewModels;
using Lab.Data.Domain;
using Lab.Lib.IO;

namespace Lab.Web.Controllers
{
    public class MediaController : ApiController
    {
		public ActionResult Index()
		{
			List<Media> images = db.Media.ToList();

			return JsonNetSerializedJson(images);
		}

		[HttpPost]		
        public ActionResult Create()
        {
			var entity = new Media();

			var model = new ImageCreateViewModel();

			var fileManager = new FileManager();

			try
			{
				entity.FileName = fileManager.Save(Request.Params["qqfile"], Request.InputStream ?? Request.Files[0].InputStream);

                db.Media.Add(entity);

				db.SaveChanges();

				model.Success = true;

				model.Image = entity;
			}
			catch(Exception ex)
			{

			}

            return JsonNetSerializedJson(model);
        }

		[HttpDelete]
		public ActionResult Delete(int id)
		{
			try
			{
                var image = db.Media.Single(i => i.MediaId == id);
                db.Media.Remove(image);

				FileManager manager = new FileManager();

				manager.DeleteFile(image.FileName);

				db.SaveChanges();
			}
			catch(Exception ex)
			{

			}
			return Json(new { success = true });
		}

    }
}
