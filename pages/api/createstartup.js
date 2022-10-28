import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    const client = await MongoClient.connect(
      "mongodb://localhost:27017/upliftnew"
    );
    const db = client.db();
    const startups = db.collection("startups");
    const sendData = await startups.insertOne(data);
    console.log(sendData);
    client.close();
    res.status(201).json({ response: "success" });
  }
}
export default handler;
