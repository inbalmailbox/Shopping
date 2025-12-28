using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Shopping.Models;

public class Order
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public Customer Customer { get; set; }

    public List<OrderItem> Items { get; set; }
}
