using Microsoft.EntityFrameworkCore;

namespace TourAgency.DAL.Entities;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
{
	public DbSet<Country>? Countries { get; set; }

	public DbSet<Route>? Routes { get; set; }

	public DbSet<Sale>? Sales { get; set; }
}