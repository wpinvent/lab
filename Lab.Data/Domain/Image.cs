using System.Runtime.Serialization;

namespace Lab.Data.Domain
{
    [DataContract]
    public class Image
    {
        [DataMember(Name = "id")]
        public int ImageId { get; set; }

        [DataMember(Name = "url")]
        public string Url { get; set; }
    }
}
