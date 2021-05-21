const router = require('express').Router();
const { User } = require('../models');
const { Post } = require('../models');
const { Comment } = require('../models');
const withAuth = require('../utils/auth');

// homepage will just be the dashboard for now
router.get('/', async (req, res) => {
    try {
        res.redirect('/login');
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
router.get('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.redirect('/login')
        });
    } else {
        res.status(404).end();
    }
});

//show me all posts and comments with the user authors on the dashboard
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const data = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['email']
                },
                {
                    model: Comment,
                }
            ]
        });
        const posts = data.map((post) => post.get({ plain: true }));
        console.log(posts);
        res.render('dashboard', { posts, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err);
        res.status(err).json(err);
    }
});

router.get('/create', async (req, res) => {
    try {
        res.render('create');
    } catch (err) {
        res.status(err).json(err);
    }
});

router.get('/post', async (req, res) => {
    try {
        res.render('post');
    } catch (err) {
        res.status(err).json(err);
    }
});// show me the comments on each individual post
router.get('/post/:id', async (req, res) => {
    try {
        const getPosts = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['email']
                },
                {
                    model: Comment,
                    attributes: [
                        "id",
                        "user_id",
                        "post_id",
                        "body"
                    ],
                    include: [
                        {
                            model: User,
                            attributes: ['email']
                        }
                    ]
                }
            ]
        });
        const post = getPosts.get({ plain: true });


        res.render('post', {
            post, logged_in: req.session.logged_in

        });
    } catch (err) {
        res.status(err).json(err);
    }
});

// router.get('/comment/:id', async (req, res) => {
//     try {
//         res.render('post');
//     } catch (err) {
//         res.status(err).json(err);
//     }
// });

module.exports = router;