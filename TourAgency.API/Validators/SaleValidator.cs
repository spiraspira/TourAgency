namespace TourAgency.API.Validators;

public class SaleValidator : AbstractValidator<SaleViewModel>
{
	public SaleValidator()
	{
		RuleFor(sale => sale.TravelPurpose)
			.NotNull()
			.Length(2, 150)
			.WithMessage("Travel purpose must be between {MinLength} and {MaxLength} characters.");

		RuleFor(sale => sale.SellDate)
			.NotNull()
			.LessThanOrEqualTo(DateTime.Now)
			.WithMessage("Sell date cannot be in the future.");
	}
}