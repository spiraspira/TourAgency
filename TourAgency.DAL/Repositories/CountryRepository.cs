namespace TourAgency.DAL.Repositories;

public class CountryRepository(ApplicationDbContext context) : GenericRepository<Country>(context), ICountryRepository
{
	public override Task<Country?> Get(Guid id)
	{
		return Set
			.Include(country => country.Routes)
			.FirstOrDefaultAsync(p => p.Id == id);
	}

	public override async Task<IEnumerable<Country>> GetAll()
	{
		return await Set
			.Include(country => country.Routes)
			.ToListAsync();
	}
}