namespace TourAgency.DAL.Entities;

public class Sale : Entity
{
	public string? TravelPurpose { get; set; }

	public DateTime? SellDate { get; set; }

	public Guid? RouteId { get; set; }

	public Route? Route { get; set; }
}