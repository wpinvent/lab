using System.Linq;
using System.Web.Mvc;
using Lab.Web.ViewModels;

namespace Lab.Web.Controllers
{
    public class HomeController : ApiController
    {       
        public ActionResult Index()
        {
            var model = new InitializationViewModel
            {
                Cards = db.Cards.ToList(),
                Decks = db.Decks.ToList(),
                Media = db.Media.ToList()
            };

            return View(model);
        }
    }
}
