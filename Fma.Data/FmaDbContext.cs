using System.Data.Entity;

namespace Fma.Data
{
    using Domain;

    public class FmaDbContext : DbContext
    {
        public DbSet<Deck> Decks { get; set; }
        public DbSet<Card> Cards { get; set; }
        public DbSet<Media> Media { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Deck>()
                .HasMany<Card>(d => d.Cards)
                .WithMany();

            modelBuilder.Entity<Card>()
                .HasRequired<Media>(c => c.Media);                

            base.OnModelCreating(modelBuilder);
        }
    }
}
