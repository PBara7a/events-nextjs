import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      // this is insuficient validation
      return res.status(422).json({ message: "Invalid email address." });
    }

    res.status(201).json({ message: "Signed up!" });
  }
}
