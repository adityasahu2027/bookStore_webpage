const Book = require("../model/book");


export const getBook = async(req, res) => {
    try {
       const book = await Book.find();
       res.status(200).json(book);
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}