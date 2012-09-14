using System.Data.Entity;

namespace Lab.Data
{
    using Domain;

    public class LabDbContext : DbContext
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
