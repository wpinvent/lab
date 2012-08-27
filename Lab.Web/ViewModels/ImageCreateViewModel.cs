using System.Runtime.Serialization;
using Lab.Data.Domain;

namespace Lab.Web.ViewModels
{
	[DataContract]
	public class ImageCreateViewModel
	{
		[DataMember(Name = "image")]
		public Image Image { get; set; }

		[DataMember(Name = "success")]
		public bool Success { get; set; }
	}

}