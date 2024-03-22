namespace TourAgency.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CountryController(
	IMapper mapper,
	IGenericService<CountryModel> countryService,
	IValidator<CountryViewModel> validator)
	: ControllerBase
{
	[HttpGet("{id}")]
	public async Task<CountryViewModel> Get(Guid id)
	{
		return mapper.Map<CountryViewModel>(await countryService.Get(id));
	}

	[HttpGet]
	public async Task<IEnumerable<CountryViewModel>> GetAll()
	{
		return mapper.Map<IEnumerable<CountryViewModel>>(await countryService.GetAll());
	}

	[HttpPost]
	public async Task<CountryViewModel> Create(CountryViewModel model)
	{
		await validator.ValidateAndThrowAsync(model);

		return mapper.Map<CountryViewModel>(
			await countryService.Create(mapper.Map<CountryModel>(model)));
	}

	[HttpPut]
	public async Task<CountryViewModel> Update(CountryViewModel model)
	{
		await validator.ValidateAndThrowAsync(model);

		return mapper.Map<CountryViewModel>(
			await countryService.Update(mapper.Map<CountryModel>(model)));
	}

	[HttpDelete("{id}")]
	public async Task<CountryViewModel> Delete(Guid id)
	{
		return mapper.Map<CountryViewModel>(await countryService.Delete(id));
	}
}