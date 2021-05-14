const router = require('express').Router();
const { Post } = require('../models');
//const { findAll } = require('../models/Post');

router.get('/', async (req, res) => {
    try {
        res.redirect('/dashboard');
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
        const data = await Post.findAll({});
        const posts = data.map((post) => post.get({ plain: true }));

        console.log(posts)
        console.log(posts);
        res.render('dashboard', { posts });
    } catch (err) {
        console.log(err);
        res.status(err).json(err);
    }
});
router.get('/post', async (req, res) => {
    try {
        res.render('post');
    } catch (err) {
        res.status(err).json(err);
    }
});
router.get('/post/:id', async (req, res) => {
    try {
        res.render('post');
    } catch (err) {
        res.status(err).json(err);
    }
});

module.exports = router;