﻿namespace TourAgency.BLL.Models;

public class CountryModel : Model
{
	public string? Name { get; set; }

	public decimal? VisaPrice { get; set; }

	public List<RouteModel> Routes { get; set; } = [];
}