namespace TourAgency.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class SaleController(
	IMapper mapper,
	IGenericService<SaleModel> saleService,
	IValidator<SaleViewModel> validator)
	: ControllerBase
{
	[HttpGet("{id}")]
	public async Task<SaleViewModel> Get(Guid id)
	{
		return mapper.Map<SaleViewModel>(await saleService.Get(id));
	}

	[HttpGet]
	public async Task<IEnumerable<SaleViewModel>> GetAll()
	{
		return mapper.Map<IEnumerable<SaleViewModel>>(await saleService.GetAll());
	}

	[HttpPost]
	public async Task<SaleViewModel> Create(SaleViewModel model)
	{
		await validator.ValidateAndThrowAsync(model);

		return mapper.Map<SaleViewModel>(
			await saleService.Create(mapper.Map<SaleModel>(model)));
	}

	[HttpPut]
	public async Task<SaleViewModel> Update(SaleViewModel model)
	{
		await validator.ValidateAndThrowAsync(model);

		return mapper.Map<SaleViewModel>(
			await saleService.Update(mapper.Map<SaleModel>(model)));
	}

	[HttpDelete]
	public async Task<SaleViewModel> Delete(Guid id)
	{
		return mapper.Map<SaleViewModel>(await saleService.Delete(id));
	}
}