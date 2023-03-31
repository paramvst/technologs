import { Stack } from "@chakra-ui/react";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BlogListItem,
  NavbarItem as Navbar,
  SearchBar,
} from "../../components/technologs";
import { getBlogs, getBlogsByCategory } from "../../services/blogservice";

const BlogsListP = () => {
  const [blogs, setBlogs] = useState([]);
  // will be used for filtering content
  const { cat } = useParams();
  const loadBlog = async () => {
    let blogResponse = null;
    console.log(cat);
    if (!cat) {
      blogResponse = await getBlogs();
    } else {
      blogResponse = await getBlogsByCategory(cat);
    }
    const { data, status } = blogResponse;
    if (status === 200) {
      console.log("Blog List: ", data.blogs);
      setBlogs(data.blogs);
    } else console.log("not getting the blog list");
  };
  useEffect(() => {
    loadBlog();
  }, []);
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Stack margin={"2%"}>
        <div className="row" style={{ marginLeft: "7%", marginRight: "7%" }}>
          {blogs.map((blog, index) => {
            return (
              <div className="col-md-3" key={index}>
                <BlogListItem
                  id={blog._id}
                  heading={blog.heading}
                  description={blog.description}
                />
              </div>
            );
          })}
        </div>
      </Stack>
    </div>
  );
};

export default BlogsListP;
