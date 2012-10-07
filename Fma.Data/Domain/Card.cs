using System.Runtime.Serialization;
using System.ComponentModel.DataAnnotations;

namespace Fma.Data.Domain
{
    [DataContract]
    public class Card
    {
        [DataMember(Name = "id")]
        public int CardId { get; set; }

        [Required]
        [DataMember(Name = "content")]
        public string Content { get; set; }

        [DataMember(Name = "url")]
        public string Url { get; set; }

        [DataMember(Name = "image")]
        public Media Media { get; set; }
    }
}
