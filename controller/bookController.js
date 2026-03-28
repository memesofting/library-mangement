const books = requre("../models/book")

exports.borrowBook = async (req, res) => {
    try {
        const { studentId, attendantId, returnDate } = req.body;

        const book = await books.findById(req.param.id)

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

        await book.Save();
        return res.status(200).json({ message: "book borrowed successfully" })
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
}