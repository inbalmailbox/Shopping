using MongoDB.Driver;
using Microsoft.Extensions.Configuration;

public class MongoOrdersService
{
    private readonly IMongoCollection<Order> _orders;

    public MongoOrdersService(IConfiguration config)
    {
        var client = new MongoClient(config["Mongo:ConnectionString"]);
        var database = client.GetDatabase(config["Mongo:Database"]);
        _orders = database.GetCollection<Order>("orders");
    }

    public async Task CreateAsync(Order order)
    {
        await _orders.InsertOneAsync(order);
    }
}
