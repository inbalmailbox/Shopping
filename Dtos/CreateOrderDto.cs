using Shopping.Models;

namespace Shopping.Dtos
{
    public class CreateOrderDto
    {
        public CustomerDto Customer { get; set; }
        public List<OrderItemDto> Items { get; set; }
    }


}
