import express from 'express'
const router = express.Router();

import { loadBlog, loadBlogs, loadBlogsByUserId, servDeleteBlog, servInsertBlog, servUpdateBlog } from '../services/blogService.js';

router.route('/fetch')
.get(
    //all blogs are fetched
     loadBlogs
  )
.put(
    // all blogs with a category name
    loadBlogs
)
.post(
    // only single blog is fetched - uses mongoID
    loadBlog
)

router.route('/crud')
.post(
    // blog is updated - need json blog object 
    servUpdateBlog
)
.put(
    // blog is inserted - uses json blog object
    servInsertBlog
)
.delete(
    // blog is deleted - uses mongo ID
    servDeleteBlog
);

//give blogs for a single user
router.get('/blog/user',[],loadBlogsByUserId)

export default router;
  