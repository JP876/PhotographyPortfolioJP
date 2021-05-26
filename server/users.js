const express = require('express');
const { checkLoggedIn } = require('./auth');
const { User } = require('./user_model');
require('dotenv').config();

let router = express.Router();

router.route('/register').post(async (req, res) => {
    try {
        const { email, password } = req.body;
        if (await User.emailTaken(email)) {
            return res.status(400).json({ message: 'Sorry email taken' });
        }
        const user = new User({ email, password });
        const token = user.generateToken();
        const doc = await user.save();
        res.cookie('x-access-token', token).status(200).send(getUserProps(doc));
    } catch (error) {
        res.status(400).json(error);
    }
});

router.route('/login').post(async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });
        const compare = await user.comparePassword(password);
        if (!compare) return res.status(400).json({ message: 'Wrong password' });
        const token = user.generateToken();
        res.cookie('x-access-token', token).status(200).send(getUserProps(user));
    } catch (err) {
        res.status(400).json({ message: 'Error', error: err });
    }
});

router.route('/isauth').get(checkLoggedIn, async (req, res) => {
    res.status(200).send(getUserProps(req.user));
});

router
    .route('/profile')
    .get(checkLoggedIn, async (req, res) => {
        try {
            const user = await User.findById(req.user._id);
            if (!user) return res.status(400).json({ message: 'User not found' });

            res.status(200).json(getUserProps(req.user));
        } catch (error) {
            return res.status(400).send(error);
        }
    })
    .patch(checkLoggedIn, async (req, res) => {
        try {
            const userInfo = await User.findById(req.user._id);
            if (!userInfo) return res.status(400).json({ message: 'User not found' });
            const user = await User.findOneAndUpdate(
                { _id: req.user._id },
                {
                    $set: {
                        firstname: req.body.firstname || userInfo.firstname,
                        lastname: req.body.lastname || userInfo.lastname,
                        age: req.body.age || userInfo.age,
                        address: req.body.address || userInfo.address,
                        city: req.body.city || userInfo.city,
                        zip: req.body.zip || userInfo.zip,
                        imagesId: req.body.imagesArr || userInfo.imagesId,
                    },
                },
                { new: true }
            );
            res.status(200).json(getUserProps(user));
        } catch (error) {
            res.status(400).send({ message: 'Problem updating', error });
        }
    })
    .delete(checkLoggedIn, async (req, res) => {
        try {
            const userInfo = await User.findById(req.user._id);
            if (!userInfo) return res.status(400).json({ message: 'User not found' });
            await User.findByIdAndRemove({ _id: req.user._id });
            res.status(200).json({ message: 'Profile deleted' });
        } catch (error) {
            res.status(400).send({ message: 'Unable to delete profile', error });
        }
    });

router.route('/update_email').patch(checkLoggedIn, async (req, res) => {
    try {
        if (await User.emailTaken(req.body.newemail)) {
            return res.status(400).json({ message: 'Sorry email already taken' });
        }
        const user = await User.findOneAndUpdate(
            { _id: req.user._id, email: req.body.email },
            {
                $set: {
                    email: req.body.newemail,
                },
            },
            { new: true }
        );
        if (!user) return res.status(400).json({ message: 'User not found' });
        const token = user.generateToken();
        res.cookie('x-access-token', token).status(200).send({ email: user.email });
    } catch (error) {
        res.status(400).send({ message: 'Problem updating email', error });
    }
});

const getUserProps = user => {
    return {
        _id: user._id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        age: user.age,
        imagesId: user.imagesId,
    };
};

module.exports = router;
