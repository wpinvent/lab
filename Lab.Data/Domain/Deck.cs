using System.Collections.Generic;
using System.Runtime.Serialization;
using System.ComponentModel.DataAnnotations;

namespace Lab.Data.Domain
{
    [DataContract]
    public class Deck
    {
        [DataMember(Name="id")]
        public int DeckId { get; set; }

        [Required]
        [DataMember(Name = "title")]
        public string Title { get; set; }

        [DataMember(Name = "cards")]
        public ICollection<Card> Cards { get; set; }
    }
}
