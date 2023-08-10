const CreateBlog = require('../model/Blog');
exports.createBlog = (req, res) => {
    const dataSend = new CreateBlog(req.body)
    dataSend.save();
    res.json(dataSend)
}


exports.getBlogs = async (req, res) => {
    try {
        const blogs = await CreateBlog.find();
        res.json(blogs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};