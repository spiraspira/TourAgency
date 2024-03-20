namespace TourAgency.API.ViewModels;

public class SaleViewModel
{
	public Guid? Id { get; set; }

	public string? TravelPurpose { get; set; }

	public DateTime? SellDate { get; set; }

	public Guid? RouteId { get; set; }

	public RouteViewModel? Route { get; set; }
}