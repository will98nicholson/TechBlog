const router = require('express').Router();
const { Post } = require('../../models');
const { findAll } = require('../../models/Post');
const { post } = require('./user-routes');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({ ...req.body, user_id: req.session.user_id });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }

});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const byePost = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!byePost) {
            res.status(404).json({ message: 'No post found!' });
            return;
        }

        res.status(200).json(byePost);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;