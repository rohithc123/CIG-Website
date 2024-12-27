import { Request, Response } from "express";
import generateToken from "./../services/token";
import hash from "./../services/hash";
import Admin from "./../model/admin"; // Assuming you have an Admin model

export const adminLogin = async function (
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password } = req.body;

    let hashedPassword = await hash(password);

    const user = await Admin.findOne({
      email: email,
      password: hashedPassword,
    });

    if (!user) {
      res.status(404).send("User not found");
      return;
    }

    let token = generateToken(email, password);
    res.status(200).send(token);
  } catch (error) {
    // console.error("Error during sign in:", error);
    res.status(500).send(`Error during sign in:${error}`);
  }
};
