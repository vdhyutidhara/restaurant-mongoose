const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "sour as a fruit."
});

const orange = new Fruit({
    name: "Orange",
    rating: 7,
    review: "orangy."
});

const banana = new Fruit({
    name: "Banana",
    rating: 9,
    review: "Pretty solid as a fruit."
});



Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach(frt => console.log(frt["name"]));
    }
});

