import express, { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Admin from "./../model/admin";

interface DecodedToken {
  _id: string;
  email: string;
  password: string;
  iat: number;
}

export default function validateToken() {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      res.status(401).send({ error: "No token provided" });
      return;
    }

    try {
      const decoded:DecodedToken = jwt.verify(token, process.env.secretKey);
      const admin = await Admin.findOne({
        _id: decoded._id,
      });

      if (!admin) {
        throw new Error();
      }
      //   req.token = token;
      //   req.admin = admin;
      next();
    } catch (error) {
      res.status(401).send({ error: "Invalid token" });
    }
  };
}
