using System.Collections.Generic;

namespace Lab.Web.ViewModels
{
    using Data.Domain;

    public class InitializationViewModel
    {
        public List<Card> Cards { get; set; }
        public List<Deck> Decks { get; set; }
        public List<Media> Media { get; set; }
    }
}