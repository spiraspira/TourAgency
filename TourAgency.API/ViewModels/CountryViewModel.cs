namespace TourAgency.API.ViewModels;

public class CountryViewModel
{
	public Guid? Id { get; set; }

	public string? Name { get; set; }

	public decimal? VisaPrice { get; set; }

	public List<RouteViewModel> Routes { get; set; } = [];
}