const router = require('express').Router()
const { Blogpost, User } = require('../models')

// GET all items
router.get('/posts', (req, res) => {
  Blogpost.find()
    .populate('user')
    .then(posts => res.json(posts))
    .catch(err => console.log(err))
})

// POST one item
router.post('/posts', (req, res) => {
  Blogpost.create(req.body)
    .then(post =>{
        User.findByIdAndUpdate(post.user, { $push: { blogposts: post._id} })
            .then(()=> 
                res.json(post))           
            .catch(err => console.log(err))
         })
    .catch(err => console.log(err))
})

// PUT one item
router.put('/posts/:id', (req, res) => {
  Blogpost.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err))
})

// DELETE one item
router.delete('/posts/:id', (req, res) => {
  Blogpost.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router