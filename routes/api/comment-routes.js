const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    console.log(req.body)
    const newComment = await Comment.create({ ...req.body })
    console.log(newComment);
    res.json(newComment);
})


module.exports = router;