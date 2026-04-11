const Author = require('../models/author');

const createAuthor = async (req, res) => {
    try {
        const { name, bio } = req.body;

        const existing = await Author.findOne({ name: name });
        if (existing) {
            return res.status(400).json({
                message: "Author already exist"
            });
        }

        const author = await Author.create({
            name,
            bio
        });
        res.status(200).json({
            message: "Author created successfully",
            author: {
                id: author._id,
                name: author.name,
                bio: author.bio,
                createdAt: author._createdAt
            }
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = { createAuthor }