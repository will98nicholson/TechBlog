const router = require('express').Router();
const { Post } = require('../../models');
const { findAll } = require('../../models/Post');
const { post } = require('./user-routes');

router.post('/', async (req, res) => {
    console.log(req.body)
    const newPost = await Post.create({ ...req.body, user_id: req.session.user_id })
    console.log(newPost);
    res.json(newPost);
})


module.exports = router;