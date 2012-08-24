﻿using System.Runtime.Serialization;

namespace Lab.Data.Domain
{
    [DataContract]
    public class Card
    {
        [DataMember(Name = "id")]
        public int CardId { get; set; }

        [DataMember(Name = "content")]
        public string Content { get; set; }

        [DataMember(Name = "url")]
        public string Url { get; set; }

        [DataMember(Name = "image")]
        public Image Image { get; set; }
    }
}
