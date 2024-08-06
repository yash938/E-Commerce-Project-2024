const express = require('express');
const app = express();
const PORT = 3000;



const product = require("./routes/product.js");
const connectDB = require("./database/db.js")
const errorMiddleware = require("./middleware/error.js")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/products", product);

app.use(errorMiddleware);
app.set("view engine", 'ejs');

connectDB();

app.listen(PORT, () => {
    console.log("Server is listening on PORT " + PORT);
});
