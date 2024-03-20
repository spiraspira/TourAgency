namespace TourAgency.API.Validators;

public class RouteValidator : AbstractValidator<RouteViewModel>
{
	public RouteValidator()
	{
		RuleFor(route => route.Name)
			.NotNull()
			.Length(2, 150)
			.WithMessage("Route name must be between {MinLength} and {MaxLength} characters.");

		RuleFor(route => route.TravelPrice)
			.NotNull()
			.GreaterThanOrEqualTo(0)
			.WithMessage("Travel price cannot be negative.");
	}
}