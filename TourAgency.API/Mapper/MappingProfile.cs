namespace TourAgency.API.Mapper;

public class MappingProfile : Profile
{
	public MappingProfile()
	{
		CreateMap<CountryModel, CountryViewModel>().ReverseMap();

		CreateMap<RouteModel, RouteViewModel>().ReverseMap();

		CreateMap<SaleModel, SaleViewModel>().ReverseMap();
	}
}