const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({ ...req.body, user_id: req.session.user_id })
        console.log(newComment);
        res.json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const newComment = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            }
        });
        if (!newComment) {
            res.status(404).json({ message: 'No comment with this id' });
            return;
        }
        res.status(200).json(newComment)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;