namespace TourAgency.API.ViewModels;

public class RouteViewModel
{
	public Guid? Id { get; set; }

	public string? Name { get; set; }

	public decimal? TravelPrice { get; set; }

	public Guid? CountryId { get; set; }

	public CountryViewModel? Country { get; set; }

	public List<SaleViewModel> Sales { get; set; } = [];
}