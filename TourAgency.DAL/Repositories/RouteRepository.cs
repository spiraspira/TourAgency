namespace TourAgency.DAL.Repositories;

public class RouteRepository(ApplicationDbContext context) : GenericRepository<Route>(context), IRouteRepository
{
	public override Task<Route?> Get(Guid id)
	{
		return Set
			.Include(route => route.Country)
			.Include(route => route.Sales)
			.FirstOrDefaultAsync(route => route.Id == id);
	}

	public override async Task<IEnumerable<Route>> GetAll()
	{
		return await Set
			.Include(route => route.Country)
			.Include(route => route.Sales)
			.ToListAsync();
	}
}