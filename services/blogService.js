import { StatusCodes } from "http-status-codes";
import {
  getBlog,
  getBlogs,
  getBlogsByUserId,
  insertBlog,
  updateBlog,
  deleteBlog,
  getBlogsByCategoryName,
} from "../database/blog.js";

export const loadBlogs = async (req, res) => {
  try {
    const categoryName = req.body.name;
    const userId = req.body.userId;
    console.log(req.body);
    let blogs = null;
    if (!categoryName) {
      if (!userId) {
        blogs = await getBlogs();
      } else {
        blogs = await getBlogsByUserId(userId);
      }
    } else {
      blogs = await getBlogsByCategoryName(categoryName);
    }

    if (!blogs) {
      return res
        .status(StatusCodes.EXPECTATION_FAILED)
        .json({ msg: "no blogs were fetched" });
    }
    res.status(StatusCodes.OK).json({ blogs });
  } catch (error) {
    console.log("Backend error in fetching all the blogs");
  }
};

export const loadBlog = async (req, res) => {
  try {
    const blogID = req.body.id;

    if (!blogID) {
      return res.status(400).json({ msg: "ID not found" });
    }

    const blog = await getBlog(blogID);
    if (!blog) {
      res.status(500).json({ msg: "No blog found" });
    }

    res.status(StatusCodes.OK).json({ blog });
  } catch (error) {
    console.log("Backend error in getting single blog");
  }
};

export const servInsertBlog = async (req, res) => {
  try {
    const blog = req.body;
    if (!blog) {
      return res.status(400).json({ msg: "give us a blog" });
    }
    const response = await insertBlog( blog);
    if (!response) {
      return res
        .status(500)
        .json({ msg: "No blog Inserted. Server error" });
    }

    res.status(StatusCodes.OK).json({ response });
  } catch (error) {
    console.log("Backend error in inserting the blog");
  }
};
export const servUpdateBlog = async (req, res) => {
  try {
  } catch (error) {
    console.log("Backend error in inserting the blog");
  }
};
export const servDeleteBlog = async (req, res) => {
  try {
  } catch (error) {
    console.log("Backend error in deleting the blog");
  }
};
export const loadBlogsByUserId = async (req, res) => {
  try {
  } catch (error) {
    console.log("Backend error in fetching the blog by user id");
  }
};
