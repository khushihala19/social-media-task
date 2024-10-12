const User = require('../models/User');

// Handle user submission
const createUser = async (req, res) => {
    try {
        const { name, socialMediaHandle } = req.body;
        const images = req.files.map(file => file.path);

        const user = new User({ name, socialMediaHandle, images });
        await user.save();

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Submission failed' });
    }
};

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(400).json({ error: 'Failed to retrieve users' });
    }
};

module.exports = { createUser, getUsers };
