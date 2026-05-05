import type { Response, Request, NextFunction } from "express";
import { JWT_PASSWORD } from "./config.js";
import jwt from "jsonwebtoken";





export const userMiddleware = (req:
    Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string, JWT_PASSWORD as string)

    if (decoded) {
        //@ts-ignore
        req.registrationid = decoded.registrationid;
        next();
    }
    else {
        res.status(403).json({ message: "Forbidden" });
    }

}