using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace Fma.Data.Domain
{
    [DataContract]
    public class Media
    {
        [DataMember(Name = "id")]
        public int MediaId { get; set; }

        [Required]
        [DataMember(Name = "file_name")]
        public string FileName { get; set; }
    }
}
