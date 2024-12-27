import { Request, Response } from "express";
import generateToken from "./../services/token";
import hash from "./../services/hash";
import Admin from "./../model/admin"; // Assuming you have an Admin model
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
export const adminLogin = async function (
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password } = req.body;

    // let hashedPassword = await hash(password);

    const user = await Admin.findOne({
      email: email,
    });

    // console.log(password);

    if (!user || !bcrypt.compareSync(password, user.password)) {
      res.status(404).send("User not found or wrong password");
      return;
    }

    let token = generateToken(user._id, email, password);
    res.status(200).send(token);
  } catch (error) {
    res.status(500).send(`Error during sign in:${error}`);
  }
};
