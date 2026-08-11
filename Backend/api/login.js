const email = "dhanush@nimbus.com";
const password = "Dhanush@123";

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  console.log(req.body);

  if (req.body.email === email && req.body.password === password) {
    res.json(true);
  } else {
    res.json(false);
  }
}