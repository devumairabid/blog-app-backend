const express = require('express');
const router = express.Router();
const blogController = require('../controller/Blog')
const getAllBlogs = require('../controller/Blog')

router

    .post('/createBlog', blogController.createBlog)
    .get('/getBlog', getAllBlogs.getBlogs)

exports.router = router;