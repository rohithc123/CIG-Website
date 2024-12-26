import { Request, Response } from "express";
import generateToken from "./../services/token";
import hash from "./../services/hash";
import Admin from "./../models/admin"; // Assuming you have an Admin model

export const adminLogin = async function (
  req: Request,
  res: Response
): Promise<Record<string, string> | Response> {
  try {
    const { email, password } = req.body;

    let hashedPassword = await hash(password);

    const user = await Admin.findOne({
      email: email,
      password: hashedPassword,
    });

    if (!user) {
      return res.status(404).send("User not found");
    }

    let token = generateToken(email, password);
    return res.status(200).send({ token: token });
  } catch (error) {
    // console.error("Error during sign in:", error);
    return res.status(500).send(`Error during sign in:${error}`);
  }
};
