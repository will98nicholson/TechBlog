const router = require('express').Router();
const { Post } = require('../models');
//const { findAll } = require('../models/Post');

router.get('/', async (req, res) => {
    try {
        res.render('dashboard');
    } catch (err) {
        res.status(err).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(err).json(err);
    }
});
router.get('/dashboard', async (req, res) => {
    try {
        const posts = await Post.findAll({});
        console.log(posts)
        console.log(posts);
        res.render('dashboard');
    } catch (err) {
        console.log(err);
        res.status(err).json(err);
    }
});

module.exports = router;