const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModels")

exports.signUp = async (req, res) => {
    try {
        const { username, password} = req.body

        if (!username || !password) {
            return res
                .status(400)
                .json({ message: "Please input username and password" })

        }

        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: "User Already Exists"});
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            username,
            password: hashedPassword,
        });

        await newUser.save();

        return res
            .status(201)
            .json({ message: "User created successfully", newUser });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Error creating user" })
    }
}