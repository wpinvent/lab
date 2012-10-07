using System.Collections.Generic;
using System.Web.Mvc;
using System.Linq;

namespace Fma.Web.Controllers
{
    using Data.Domain;

    public class DecksController : ApiController
    {
        public ActionResult Index()
        {
            List<Deck> decks = db.Decks.ToList();

            return JsonNetSerializedJson(decks);
        }

        public ActionResult Detail(int id)
        {
            var deck = db.Decks.Single(d => d.DeckId == id);

            return JsonNetSerializedJson(deck);
        }

        [HttpPost]
        public ActionResult Create(Deck deck)
        {
            if (ModelState.IsValid)
            {
                db.Decks.Add(deck);
                db.SaveChanges();
            }

            return JsonNetSerializedJson(deck);
        }

        [HttpPut]
        public ActionResult Update(int id, FormCollection collection)
        {
            var deck = db.Decks.Single(d => d.DeckId == id);
            UpdateModel(deck);
            db.SaveChanges();

            return JsonNetSerializedJson(deck);
        }

        [HttpDelete]
        public ActionResult Delete(int id)
        {
            var deck = db.Decks.Single(d => d.DeckId == id);
            db.Decks.Remove(deck);
            db.SaveChanges();

            return Json(new { success = true });
        }
    }
}
