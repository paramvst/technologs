import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const insertBlog = async (blog) => {
  const client = new MongoClient(process.env.URL);
  try {
    await client.connect();
    return await client.db("MyBlogs").collection("blogs").insertOne(blog);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

const getBlogs = async () => {
  const client = new MongoClient(process.env.URL);
  try {
    await client.connect();
    return await client
    .db("MyBlogs")
    .collection("blogs")
    .find().toArray()
  } catch (error) {
    console.log("Error while fetching blogs.");
    console.log(error);
  } finally {
    await client.close();
  }
};

const getBlog = async (id) => {
  const client = new MongoClient(process.env.URL);
  try {
    const objId = new ObjectId(id);
    await client.connect();
    return await client
      .db("MyBlogs")
      .collection("blogs")
      .findOne({ _id: objId });
  } catch (error) {
    console.log("Error while fetching blog.");
    console.log(error);
  } finally {
    await client.close();
  }
};

const updateBlog = async (blog) => {
  const client = new MongoClient(process.env.URL);
  try {
    await client.connect();
    return await client
      .db("MyBlogs")
      .collection("blogs")
      .updateOne({ _id: blog._id }, { $set: blog });
  } catch (error) {
    console.log("Error while updating blog.");
  } finally {
    await client.close();
  }
};
const deleteBlog = async (id) => {
  const client = new MongoClient(process.env.URL);
  try {
    await client.connect();
    return await client
      .db("MyBlogs")
      .collection("blogs")
      .deleteOne({ _id:id });
  } catch (error) {
    console.log("Error while deleting.");
  } finally {
    await client.close();
  }
};

const getBlogsByUserId = async (id) => {
    const client = new MongoClient(process.env.URL);
  try {
    await client.connect();
    return await client
      .db("MyBlogs")
      .collection("blogs")
      .find({ owner:id }).toArray();
  } catch (error) {
    console.log("Error while getting a blog by user id.");
  } finally {
    await client.close();
  }
}

const getBlogsByCategoryName = async (name) => {
  const client = new MongoClient(process.env.URL);
try {
  await client.connect();
  return await client
    .db("MyBlogs")
    .collection("blogs")
    .find({category:name}).toArray();
} catch (error) {
  console.log("Error while getting a blog by user id.");
} finally {
  await client.close();
}
}
export { getBlog, getBlogs, insertBlog, updateBlog, deleteBlog, getBlogsByUserId, getBlogsByCategoryName };