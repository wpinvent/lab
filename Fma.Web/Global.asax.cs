using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Fma.Web
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class MvcApplication : System.Web.HttpApplication
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }

        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            //routes.IgnoreRoute("");

			#region Cards

			routes.MapRoute(
				"Update a card",
				"cards/{id}",
				new { controller = "Cards", action = "Update" },
				new { httpMethod = new HttpMethodConstraint("PUT") }
			);

			routes.MapRoute(
				"Delete a card",
				"cards/{id}",
				new { controller = "Cards", action = "Delete" },
				new { httpMethod = new HttpMethodConstraint("DELETE") }
			);

			routes.MapRoute(
				"Get a card",
				"cards/{id}",
				new { controller = "Cards", action = "Detail" },
				new { httpMethod = new HttpMethodConstraint("GET") }
			);

			routes.MapRoute(
				"Create a card",
				"cards",
				new { controller = "Cards", action = "Create" },
				new { httpMethod = new HttpMethodConstraint("POST") }
			);

			routes.MapRoute(
				"Get cards",
				"cards",
				new { controller = "Cards", action = "Index" },
				new { httpMethod = new HttpMethodConstraint("GET") }
			);

			#endregion

			#region Decks

            routes.MapRoute(
                "Update a deck",
                "decks/{id}",
                new { controller = "Decks", action = "Update" },
                new { httpMethod = new HttpMethodConstraint("PUT") }
            );

            routes.MapRoute(
                "Delete a deck",
                "decks/{id}",
                new { controller = "Decks", action = "Delete" },
                new { httpMethod = new HttpMethodConstraint("DELETE") }
            );

            routes.MapRoute(
                "Get a deck",
                "decks/{id}",
                new { controller = "Decks", action = "Detail" },
                new { httpMethod = new HttpMethodConstraint("GET") }
            );

            routes.MapRoute(
                "Create a deck",
                "decks",
                new { controller = "Decks", action = "Create" },
                new { httpMethod = new HttpMethodConstraint("POST") }
            );

            routes.MapRoute(
                "Get decks",
                "decks",
                new { controller = "Decks", action = "Index" },
                new { httpMethod = new HttpMethodConstraint("GET") }
            );

			#endregion

			#region Images

			routes.MapRoute(
				"Delete an image",
				"media/{id}",
				new { controller = "Media", action = "Delete" },
				new { httpMethod = new HttpMethodConstraint("DELETE") }
			);

			routes.MapRoute(
				"Upload and Create an image",
                "media",
                new { controller = "Media", action = "Create" },
				new { httpMethod = new HttpMethodConstraint("POST") }
			);

			routes.MapRoute(
				"Get images",
                "media",
                new { controller = "Media", action = "Index" },
				new { httpMethod = new HttpMethodConstraint("GET") }
			);

			#endregion

			routes.MapRoute(
				"Default", // Route name
				"{controller}/{action}/{id}", // URL with parameters
				new { controller = "Home", action = "Index", id = UrlParameter.Optional } // Parameter defaults
			);

        }

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            RegisterGlobalFilters(GlobalFilters.Filters);
            RegisterRoutes(RouteTable.Routes);
        }
    }
}