// app/api/contact/route.js

import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const { feedback } = await request.json();

    const client = await clientPromise;
    const db = client.db("bitlinks"); // or your DB name
    const collection = db.collection("feedback");

    const result = await collection.insertOne({
      feedback,
      timestamp: new Date(),
    });

    return new Response(JSON.stringify({ message: "Feedback stored", id: result.insertedId }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Failed to store feedback" }), {
      status: 500,
    });
  }
}
