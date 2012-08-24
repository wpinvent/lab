using System.Collections.Generic;

namespace Lab.Data.Domain
{
    public class Deck
    {
        public int DeckId { get; set; }

        public ICollection<Card> Cards { get; set; }
    }
}
