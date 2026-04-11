const Book = require("../models/book")
const Author = require("../models/author")

const createBook = async (req, res) => {
    try {
        const { title, isbn, authors, status } = req.body

        const bookExist = await Book.findOne({ isbn: isbn })
        if (bookExist) {
            return res.status(400).json({
                message: "Book already exist"
            })
        }

        // Handle author names - find or create authors
        let authorIds = []
        if (authors && Array.isArray(authors)) {
            for (let authorName of authors) {
                let author = await Author.findOne({ name: authorName })
                if (!author) {
                    author = await Author.create({ name: authorName })
                }
                authorIds.push(author._id)
            }
        }

        const book = await Book.create({
            title,
            isbn,
            authors: authorIds,
            status
        });
        return res.status(200).json({
            message: "Book created successfully",
            book: { id: book._id, bookTitle: book.title, isbn: book.isbn, createdAt: book.createdAt }
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const borrowBook = async (req, res) => {
    try {
        const { studentId, attendantId, returnDate } = req.body;

        const book = await Book.findById(req.params.id)

        if (!book) {
            return res.status(400).json({ message: "book not found" })
        }

        if (book.status === "OUT") {
            return res.status(400).json({ message: "book is already out" })
        }

        book.status = "OUT";
        book.borrowedBy = studentId;
        book.issuedBy = attendantId;
        book.returnDate = returnDate;

        await book.save();
        return res.status(200).json({ message: "book borrowed successfully" })
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = { borrowBook, createBook }