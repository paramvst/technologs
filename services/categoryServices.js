import { StatusCodes } from 'http-status-codes';
import { getCategory, getCategories, insertCategory, updateCategory, deleteCategory  } from '../database/categories.js'

export const loadCategories = async (req, res) => {
  try {
    const Categories = await getCategories();
    if (!Categories) {
      return res
        .status(StatusCodes.EXPECTATION_FAILED)
        .json({ msg: "no Categories were fetched" });
    }
    res.status(StatusCodes.OK).json({Categories});
  } catch (error) {
    console.log("Backend error in fetching all the Categories");
  }
};

export const loadCategory = async (req, res) => {
  try {
    const categoryID = req.body.id;

    if (!categoryID) {
      return res.status(400).json({ msg: "ID not found" });
    }
    const category = await getCategory(categoryID);
    if (!category) {
      return res.status(500).json({ msg: "No Category found" });
    }
    
    res.status(StatusCodes.OK).json({category})
  } catch (error) {
    console.log("Backend error in getting single Category", error);
  }
};

//crud
export const servInsertCategory = async (req, res) => {
  try {
    const category = req.body
    if (!category) {
      return res.status(400).json({ msg: "give us a category" });
    }
    const response = await insertCategory(category);
    if (!response) {
      return res.status(500).json({ msg: "No Category Inserted. Server error" });
    }
    
    res.status(StatusCodes.OK).json({response})
  } catch (error) {
    console.log("Backend error in inserting the Category");
  }
};
export const servUpdateCategory = async (req, res) => {
  try {
  } catch (error) {
    console.log("Backend error in updating the Category");
  }
};
export const servDeleteCategory = async (req, res) => {
  try {
  } catch (error) {
    console.log("Backend error in deleting the Category");
  }
};
