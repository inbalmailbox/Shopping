using Microsoft.AspNetCore.Mvc;
using Shopping.Dtos;
using Shopping.Models;

[ApiController]
[Route("api/orders")]
public class OrdersController : ControllerBase
{
    private readonly MongoOrdersService _service;

    public OrdersController(MongoOrdersService service)
    {
        _service = service;
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateOrderDto dto)
    {
        var order = new Order
        {
            Customer = new Customer
            {
                FullName = dto.Customer.FullName,
                Email = dto.Customer.Email,
                Address = dto.Customer.Address
            },
            Items = dto.Items.Select(i => new OrderItem
            {
                ProductId = i.ProductId,
                ProductName = i.ProductName,
                Quantity = i.Quantity
            }).ToList()
        };

        await _service.CreateAsync(order);

        return Ok(new { message = "Order saved successfully" });
    }
}
