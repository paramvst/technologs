import express from 'express'
const router = express.Router();

import { StatusCodes } from 'http-status-codes';
import { loadCategories,loadCategory, servDeleteCategory, servInsertCategory, servUpdateCategory } from '../services/categoryServices.js';


router.route('/fetch')
.get(
    //all Categorys are fetched
     loadCategories
  )
.post(
    // only single Category is fetched - uses mongoID
    loadCategory
)

router.route('/crud')
.post(
    // Category is updated - need json Category object 
    servUpdateCategory
)
.put(
    // Category is inserted - uses json Category object
    servInsertCategory
)
.delete(
    // Category is deleted - uses mongo ID
    servDeleteCategory
);


export default router;
  