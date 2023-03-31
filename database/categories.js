import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const getCategory = async (_id) => {
  const client = new MongoClient(process.env.URL);
  try {
    const objId = new ObjectId(_id);
    await client.connect();
    return await client
      .db("MyBlogs")
      .collection("categories")
      .findOne({ _id: objId });
  } catch (error) {
    console.log("Error while getting a category", error);
  }
};

const getCategories = async () => {
  const client = new MongoClient(process.env.URL);
  try {
    await client.connect();
    return await client
    .db("MyBlogs")
    .collection("categories")
    .find().toArray()
  } catch (error) {
    console.log("Error while getting all category", error);
  }
};

const insertCategory = async (category) => {
  const client = new MongoClient(process.env.URL);
  try {
    await client.connect();
    console.log('ok');
    return await client
      .db("MyBlogs")
      .collection("categories")
      .insertOne(category );
  } catch (error) {
    console.log("Error while inserting a category", error);
  }
};
const updateCategory = async (category) => {
  const client = new MongoClient(process.env.URL);
  try {
    await client.connect();
    return await client
      .db("MyBlogs")
      .collection("categories")
      .updateOne({ _id: category._id }, { $set: category });
  } catch (error) {
    console.log("Error while updating category.");
  } finally {
    await client.close();
  }
};
const deleteCategory = async (_id) => {
  const client = new MongoClient(process.env.URL);
  try {
    const objId = new ObjectId(_id);
    await client.connect();
    return await client
      .db("MyBlogs")
      .collection("categories")
      .deleteOne({ _id: objId });
  } catch (error) {
    console.log("Error while deleting category.");
  } finally {
    await client.close();
  }
};

export {
  getCategory,
  getCategories,
  insertCategory,
  updateCategory,
  deleteCategory,
};
