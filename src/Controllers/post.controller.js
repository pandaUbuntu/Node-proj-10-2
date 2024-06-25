//import Post from '../Models/post.js'

export const getPosts = ((req, res) => {
    res.send("Ви отримали всі пости.");
})

export const getPost = ((req, res) => {
    const id = Number(req.params.postId)
    
    res.send("Ви отримали пост з id " + id);
})

export const createPost = ((req, res) => {
    //res.send("Ви створили новий пост");
    res.status(211).json("newProduct")
})

export const updatePost = ((req, res) => {
    const id = Number(req.params.id);

    res.send("Ви змінили пост з ID " + id);
    //res.status(200).json('Product updated')
})

export const deletePost = ((req, res) => {
    const id = Number(req.params.id);
    res.send("Ви видалили пост з ID " + id);
})
