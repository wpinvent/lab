using System.IO;
using System;

namespace Fma.Lib.IO
{
	public class FileManager
	{
		public string Save(string filename, Stream stream)
		{
			var name = CreateUniqueFilename(filename);

			const int length = 256;
			var buffer = new byte[length];

			using (var writer = new FileStream(string.Format("{0}\\uploads\\{1}", System.AppDomain.CurrentDomain.BaseDirectory, name), FileMode.Create))
			{
				var bytesRead = 0;
				do
				{
					bytesRead = stream.Read(buffer, 0, length);
					writer.Write(buffer, 0, bytesRead);
				} while (bytesRead > 0);

				writer.Close();
				writer.Dispose();
			}

			return name;
		}

		private string CreateUniqueFilename(string filename)
		{
			return string.Format("{0}{1}", Guid.NewGuid(), Path.GetExtension(filename));
		}

		public void DeleteFile(string filename)
		{
			var path = string.Format("{0}\\uploads\\{1}", System.AppDomain.CurrentDomain.BaseDirectory, filename);

			File.Delete(path);
		}
	}
}
