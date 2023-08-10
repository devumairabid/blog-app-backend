const express = require('express');
const blogRouter = require('./router/Blog')
const getRouter = require('./router/Blog')
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
const cors = require('cors')
app.use(express.json());

app.use(cors())
app.use('/send', blogRouter.router)
app.use('/get', getRouter.router)
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb+srv://UmairAbid927:Gpcsf-790838@cluster0.o3ptboi.mongodb.net/blogs');

}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
