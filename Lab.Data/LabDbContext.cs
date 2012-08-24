using System.Data.Entity;

namespace Lab.Data
{
    using Domain;

    public class LabDbContext : DbContext
    {
        public DbSet<Deck> Decks { get; set; }
        public DbSet<Card> Cards { get; set; }
        public DbSet<Image> Images { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Deck>()
                .HasMany<Card>(d => d.Cards)
                .WithOptional();

            modelBuilder.Entity<Card>()
                .HasRequired<Image>(c => c.Image);

            base.OnModelCreating(modelBuilder);
        }
    }
}
