namespace TourAgency.API.Validators;

public class CountryValidator : AbstractValidator<CountryViewModel>
{
	public CountryValidator()
	{
		RuleFor(country => country.Name)
			.NotNull()
			.Length(2, 56)
			.WithMessage("Country name must be between {MinLength} and {MaxLength} characters.");

		RuleFor(country => country.VisaPrice)
			.NotNull()
			.GreaterThanOrEqualTo(0)
			.WithMessage("Visa price cannot be negative.");
	}
}