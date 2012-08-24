using System.Collections.Generic;
using System.Web.Mvc;

namespace Lab.Web.Controllers
{
    using Data.Domain;

    public class DecksController : Controller
    {
        public JsonResult Index()
        {
            List<Deck> decks = new List<Deck>{
                new Deck{ DeckId = 1 },
                new Deck{ DeckId = 2 },
                new Deck{ DeckId = 3 }
            };

            return Json(decks, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Index(Deck deck)
        {
            return Json(deck);
        }
    }
}
