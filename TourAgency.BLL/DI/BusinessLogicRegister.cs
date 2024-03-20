namespace TourAgency.BLL.DI;

public static class BusinessLogicRegister
{
	public static void AddBusinessLogic(this IServiceCollection services, IConfiguration config)
	{
		services.AddScoped<IGenericService<CountryModel>, GenericService<CountryModel, Country>>();

		services.AddScoped<IGenericService<RouteModel>, GenericService<RouteModel, Route>>();

		services.AddScoped<IGenericService<SaleModel>, GenericService<SaleModel, Sale>>();

		services.AddDataAccess(config);
	}
}