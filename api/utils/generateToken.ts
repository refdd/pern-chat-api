import jwt from "jsonwebtoken";
import { Response } from "express";

const generateToken = (userId: string, res: Response) => {
	const isProduction = process.env.NODE_ENV === "production";
	const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // MS,
		httpOnly: true, // prevent XSS cross site scripting
		sameSite: "strict", // CSRF attack cross-site request forgery
		domain: isProduction ? "pern-chat.vercel.app" : undefined,
		secure: isProduction,
	});

	return token;
};

export default generateToken;