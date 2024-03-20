namespace TourAgency.BLL.Mapper;

public class MappingProfile : Profile
{
	public MappingProfile()
	{
		CreateMap<Country, CountryModel>().ReverseMap();

		CreateMap<Route, RouteModel>().ReverseMap();

		CreateMap<Sale, SaleModel>().ReverseMap();

	}
}