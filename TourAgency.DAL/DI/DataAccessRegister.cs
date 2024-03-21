namespace TourAgency.DAL.DI;

public static class DataAccessRegister
{
	public static void AddDataAccess(this IServiceCollection services, IConfiguration config)
	{
		services.AddDbContext<ApplicationDbContext>(options =>
		{
			options.UseNpgsql(config.GetConnectionString("DefaultConnection"));
		});

		services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));

		services.AddScoped<IGenericRepository<Country>, CountryRepository>();

		services.AddScoped<IGenericRepository<Route>, RouteRepository>();

		services.AddScoped<IGenericRepository<Sale>, SaleRepository>();
	}
}