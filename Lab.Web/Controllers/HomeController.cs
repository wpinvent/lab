using System.Web.Mvc;
using Lab.Web.ViewModels;
using Lab.Data;
using System.Linq;

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

        public ActionResult GetInitialCards()
        {
            return JsonNetSerializedJson(db.Cards.ToList());
        }

        public ActionResult GetInitialDecks()
        {
            return JsonNetSerializedJson(db.Decks.ToList());
        }

        public ActionResult GetInitialMedia()
        {
            return JsonNetSerializedJson(db.Media.ToList());
        }

    }
}
