import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";

import { JWT_PASSWORD } from "./config.js";
import { ContentModel } from "./db.js";
import { userMiddleware } from "./middleware.js";


const app = express();
const allowedOrigins = ["http://localhost:5173", "https://summer-saas-o1visosin-srikar025s-projects.vercel.app"];
app.use(express.json());
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

app.post("/api/v2/login", async (req, res) => {
    const registrationid = req.body.registrationid;

    const existinguser = await ContentModel.findOne({
        registrationid
    });


    if (existinguser) {
        const token = jwt.sign(
            { registrationid: existinguser.registrationid },
            JWT_PASSWORD
        );

        return res.json({ token });

    } else {
        return res.status(403).json({
            message: "User not found"
        });
    }
});

app.get("/api/v2/content", userMiddleware, async (req, res) => {
    //@ts-ignore
    const registrationid = req.registrationid;
    const content = await ContentModel.findOne({
        registrationid: registrationid
    })

    res.json({
        content
    })

})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});


