namespace TourAgency.DAL.Repositories;

public class SaleRepository(ApplicationDbContext context) : GenericRepository<Sale>(context), ISaleRepository
{
	public override Task<Sale?> Get(Guid id)
	{
		return Set
			.Include(sale => sale.Route)
			.FirstOrDefaultAsync(sale => sale.Id == id);
	}

	public override async Task<IEnumerable<Sale>> GetAll()
	{
		return await Set
			.Include(sale => sale.Route)
			.ToListAsync();
	}
}