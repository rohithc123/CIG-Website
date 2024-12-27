import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey: string = process.env.secretKey as string;

interface Payload {
  _id: string;
  email: string;
  password: string;
}

function generateToken(_id: string, email: string, password: string): string {
  const payload: Payload = {
    _id: _id,
    email: email,
    password: password,
  };

  const token = jwt.sign(payload, secretKey, { expiresIn: "30d" });

  return token;
}

export default generateToken;
