db.books.find({genre : "Fiction"})

db.books.find({published_year :{$gte : 1950}})

db.books.find({author:"Harper Lee"})

db.books.updateOne(
    {title :"Moby Dick"},
    {$set :{price : 15.00}}
)

db.books.deleteOne({title:"The Alchemist"})

db.books.find(
    { in_stock: true, published_year: { $gt: 2010 } },
    { title: 1, author: 1, price: 1 }
).sort({ price: 1 }) 
.limit(5) 
.skip(0)

db.books.aggregate([
    { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])

db.books.aggregate([
    { $group: { _id: "$author", bookCount: { $sum: 1 } } },
    { $sort: { bookCount: -1 } },
    { $limit: 1 }
])

db.books.aggregate([
    { $project: { decade: { $floor: { $divide: ["$publishedYear", 10] } } } },
    { $group: { _id: "$decade", count: { $sum: 1 } } },
    { $sort: { _id: 1 } }
])

db.books.createIndex({ title: 1 })
db.books.createIndex({ author: 1, publishedYear: -1 })
db.books.find({ title: "Sample Book" }).explain("executionStats")
db.books.find({ title: "Sample Book" }).explain("executionStats")
