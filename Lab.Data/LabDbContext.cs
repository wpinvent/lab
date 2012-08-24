using System.Data.Entity;

namespace Lab.Data
{
    using Domain;

    public class LabDbContext : DbContext
    {
        public DbSet<Deck> Decks { get; set; }
        public DbSet<Card> Cards { get; set; }
        public DbSet<Image> Images { get; set; }
    }
}
