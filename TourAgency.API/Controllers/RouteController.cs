namespace TourAgency.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class RouteController(
	IMapper mapper,
	IGenericService<RouteModel> routeService,
	IValidator<RouteViewModel> validator)
	: ControllerBase
{
	[HttpGet("{id}")]
	public async Task<RouteViewModel> Get(Guid id)
	{
		return mapper.Map<RouteViewModel>(await routeService.Get(id));
	}

	[HttpGet]
	public async Task<IEnumerable<RouteViewModel>> GetAll()
	{
		return mapper.Map<IEnumerable<RouteViewModel>>(await routeService.GetAll());
	}

	[HttpPost]
	public async Task<RouteViewModel> Create(RouteViewModel model)
	{
		await validator.ValidateAndThrowAsync(model);

		return mapper.Map<RouteViewModel>(
			await routeService.Create(mapper.Map<RouteModel>(model)));
	}

	[HttpPut]
	public async Task<RouteViewModel> Update(RouteViewModel model)
	{
		await validator.ValidateAndThrowAsync(model);

		return mapper.Map<RouteViewModel>(
			await routeService.Update(mapper.Map<RouteModel>(model)));
	}

	[HttpDelete("{id}")]
	public async Task<RouteViewModel> Delete(Guid id)
	{
		return mapper.Map<RouteViewModel>(await routeService.Delete(id));
	}
}