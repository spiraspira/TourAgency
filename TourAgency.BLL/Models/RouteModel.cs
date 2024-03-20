namespace TourAgency.BLL.Models;

public class RouteModel : Model
{
	public string? Name { get; set; }

	public decimal? TravelPrice { get; set; }

	public Guid? CountryId { get; set; }

	public CountryModel? Country { get; set; }

	public List<SaleModel> Sales { get; set; } = [];
}