using System.Collections.Generic;
using System.Runtime.Serialization;
using System.ComponentModel.DataAnnotations;
using System;

namespace Fma.Data.Domain
{
    [DataContract]
    public class Deck : IValidatableObject
    {
        [DataMember(Name="id")]
        public int DeckId { get; set; }

        [Required]
        [DataMember(Name = "title")]
        public string Title { get; set; }

        [DataMember(Name = "cards")]
        public ICollection<Card> Cards { get; set; }

        [DataMember(Name = "starts_on")]
        public DateTime? StartsOn { get; set; }

        [DataMember(Name = "ends_on")]
        public DateTime? EndsOn { get; set; }

        [DataMember(Name = "enabled")]
        public bool Enabled { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if (StartsOn.HasValue && StartsOn <= DateTime.Now)
                yield return new ValidationResult("Starting date must occur in the future", new[] { "StartsOn" });

            if (StartsOn.HasValue && EndsOn.HasValue && EndsOn >= StartsOn)
                yield return new ValidationResult("Date to end must occur after the start date.", new [] { "EndsOn" });
        }
    }
}
