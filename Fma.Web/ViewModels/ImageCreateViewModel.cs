using System.Runtime.Serialization;
using Fma.Data.Domain;

namespace Fma.Web.ViewModels
{
	[DataContract]
	public class ImageCreateViewModel
	{
		[DataMember(Name = "image")]
		public Media Image { get; set; }

		[DataMember(Name = "success")]
		public bool Success { get; set; }
	}

}