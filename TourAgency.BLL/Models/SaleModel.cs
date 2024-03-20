namespace TourAgency.BLL.Models;

public class SaleModel : Model
{
	public string? TravelPurpose { get; set; }

	public DateTime? SellDate { get; set; }

	public Guid? RouteId { get; set; }

	public RouteModel? Route { get; set; }
}