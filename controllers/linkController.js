const Link = require("../models/linkModels")
const User = require("../models/userModels")

exports.shortenLink = async (req, res) => {
    try {
        const { originalUrl } = req.body;
        let { slug } = req.body;

        if (!originalUrl) {
            return res
                .status(400)
                .json({ message: "No link sent" })
        }

        while (await Link.exists({ slug }) || !slug) {
            slug = Math.random().toString(36).slice(2, 10);
        }

        const user = await User.findById(req.user.userId);

        const newLink = new Link({ originalUrl, slug, user });
        await newLink.save();

        user.links.push(newLink);
        await user.save();

        return res
            .status(201)
            .json({ message: "Link shortened successfully", slug })


    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error creating link" })
    }
}

exports.fetchUrl = async (req, res) => {
    try {
        const { slug } = req.body;

        if (!slug) {
            return res.status(400).json({ message: "No slug sent" });
        }

        const link = await Link.findOne({ slug });

        if (!link) {
            return res.status(404).json({ message: "Link not found" });
        }
        const { originalUrl } = link


        return res
            .status(200)
            .json({ message: "Link found successfully", originalUrl })


    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error fetching url" })
    }
}
