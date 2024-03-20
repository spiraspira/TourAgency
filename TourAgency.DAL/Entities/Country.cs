namespace TourAgency.DAL.Entities;

public class Country : Entity
{
	public string? Name { get; set; }

	public decimal? VisaPrice { get; set; }
}