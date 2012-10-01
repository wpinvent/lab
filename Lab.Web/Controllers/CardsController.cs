using System.Collections.Generic;
using System.Web.Mvc;
using System.Linq;

namespace Lab.Web.Controllers
{
    using Data.Domain;

    public class CardsController : ApiController
    {
        public ActionResult Index()
        {
            List<Card> cards = db.Cards.Include("Media").ToList();

            return JsonNetSerializedJson(cards);
        }

        public ActionResult Detail(int id)
        {
            var card = db.Cards.Single(d => d.CardId == id);

            return JsonNetSerializedJson(card);
        }

        [HttpPost]
        public ActionResult Create(Card card)
        {
            if (ModelState.IsValid)
            {
                db.Cards.Add(card);
                db.SaveChanges();
            }

            return JsonNetSerializedJson(card);
        }

        [HttpPut]
        public ActionResult Update(int id, FormCollection collection)
        {
            var card = db.Cards.Single(d => d.CardId == id);
            UpdateModel(card);
            db.SaveChanges();

            return JsonNetSerializedJson(card);
        }

        [HttpDelete]
        public ActionResult Delete(int id)
        {
            var card = db.Cards.Single(d => d.CardId == id);
            db.Cards.Remove(card);
            db.SaveChanges();

            return Json(new { success = true });
        }
    }
}
