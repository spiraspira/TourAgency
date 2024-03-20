namespace TourAgency.DAL.Entities;

public class Route : Entity
{
	public string? Name { get; set; }

	public Guid? CountryId { get; set; }

	public Country? Country { get; set; }
}