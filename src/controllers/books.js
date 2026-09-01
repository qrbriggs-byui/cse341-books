import { getAllBooks, getBookById } from "../models/books.js";

const getBooksHandler = async (req, res) => {
  try {
    const books = await getAllBooks();

    return res.status(200).json(books);
  } catch (error) {
    console.error("Error retrieving books:", error);

    return res.status(500).json({ error: "Unable to retrieve books" });
  }
};

const getBookByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await getBookById(id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    return res.status(200).json(book);
  } catch (error) {
    console.error("Error retrieving book by ID:", error);
    return res.status(500).json({ error: "Unable to retrieve book by ID" });
  }
};

export { getBooksHandler, getBookByIdHandler };
