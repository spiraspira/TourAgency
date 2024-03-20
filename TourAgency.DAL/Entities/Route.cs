namespace TourAgency.DAL.Entities;

public class Route : Entity
{
	public string? Name { get; set; }

	public decimal? TravelPrice { get; set; }

	public Guid? CountryId { get; set; }

	public Country? Country { get; set; }

	public List<Sale> Sales { get; set; } = [];
}