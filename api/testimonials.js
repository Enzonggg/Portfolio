import { promises as fs } from "fs";
import path from "path";

const storagePath = path.join("/tmp", "enzo-testimonials.json");

const allowCors = (res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
};

async function readTestimonials() {
  try {
    const content = await fs.readFile(storagePath, "utf8");
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    await fs.writeFile(storagePath, JSON.stringify([], null, 2), "utf8");
    return [];
  }
}

async function writeTestimonials(data) {
  await fs.writeFile(storagePath, JSON.stringify(data, null, 2), "utf8");
}

export default async function handler(req, res) {
  allowCors(res);

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method === "GET") {
    const items = await readTestimonials();
    res.status(200).json(items);
    return;
  }

  if (req.method === "POST") {
    const { name, relationship, message } = req.body || {};

    if (!name || !relationship || !message || String(message).trim().length < 20) {
      res.status(400).json({ error: "Please provide valid fields." });
      return;
    }

    const items = await readTestimonials();
    const newItem = {
      name: String(name).trim(),
      relationship: String(relationship).trim(),
      message: String(message).trim(),
    };

    const nextItems = [newItem, ...items];
    await writeTestimonials(nextItems);

    res.status(201).json({ success: true, item: newItem });
    return;
  }

  res.status(405).json({ error: "Method not allowed" });
}
