import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import {config} from "dotenv"
import { getUserById } from "../database/user.js";
import { CancellationToken } from "mongodb";
config()

const Authenticate = async (req, res, next) => {
  const token = req.cookies.authCookies;
  try {
    if (!token) {
      return res.status(StatusCodes.BAD_REQUEST).json({msg:'no token found'});
    }
    
    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
    
    
    //if not authenticated send the request back
    if (!verifiedUser) {
      return res.status(StatusCodes.BAD_REQUEST).json({msg: "Token is not valid"});
    }


    const user = await getUserById(verifiedUser._id);

    if (!user) {
      return res.status(400).json({message: "User not found based on the token"})
    }

    req.rootUser = user;
    req.rootID = verifiedUser._id

    next()
    //authenticated then doing the backend stuff
  } catch (error) {
    //USER NOT AUTHENTICATED
    console.log("Going into the error")
    res.status(StatusCodes.UNAUTHORIZED);
  }
};

export default Authenticate;
