const router = require('express').Router();
const { Post } = require('../models');
//const { findAll } = require('../models/Post');

router.get('/dashboard', async (req, res) => {
    try {
        const posts = await Post.findAll({});
        console.log(posts);
        res.render('dashboard');
    } catch (err) {
        res.status(err).json(err);
    }
});
module.exports = router;