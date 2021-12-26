import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const filePath = path.resolve(".", "public", "files", "Kevin_Gonzalez_Resume.pdf");
const resumeBuffer = fs.readFileSync(filePath);

export default function handleRequest(req: NextApiRequest, res: NextApiResponse<Buffer>) {
  res.setHeader("Content-Disposition", "attachment; filename=Kevin_Gonzalez_Resume.pdf");
  res.setHeader("Content-Type", "application/pdf");
  res.send(resumeBuffer);
}
