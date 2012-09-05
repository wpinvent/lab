using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace Lab.Data.Domain
{
    [DataContract]
    public class Image
    {
        [DataMember(Name = "id")]
        public int ImageId { get; set; }

        [Required]
        [DataMember(Name = "file_name")]
        public string FileName { get; set; }
    }
}
