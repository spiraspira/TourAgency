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

		services.AddScoped<ICountryRepository, CountryRepository>();

		services.AddScoped<IRouteRepository, RouteRepository>();
	}
}