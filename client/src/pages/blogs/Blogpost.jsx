import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Blogpost, NavbarItem } from "../../components/technologs";
import { getBlog } from "../../services/blogservice";

const BlogpostP = (props) => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    loadBlog();
  }, [id]);

  const loadBlog = async () => {
    const { status, data } = await getBlog(id);
    console.log(status);
    if (status === 200) {
      console.log("Individual blog: ", data.blog);
      setBlog(data.blog);
    } else console.log("not getting the blog");
  };
  return (
    <>
      <NavbarItem />
      <Blogpost blog={blog} />
    </>
  );
};

export default BlogpostP;
