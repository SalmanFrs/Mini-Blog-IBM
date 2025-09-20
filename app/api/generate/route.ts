import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN as string,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const fullPrompt = `Please write a mini blog based on the following topic, using the same language as the input. Do not exceed 1500 characters (including spaces). Stop once you reach the limit. Make it clear, concise, and easy to understand. Use Markdown lists if needed. Do not add a title, disclaimer, or emoji.${prompt}`;

    const output = await replicate.run("ibm-granite/granite-3.3-8b-instruct", {
      input: {
        prompt: fullPrompt,
        max_new_tokens: 600,
      },
    });

    const result = Array.isArray(output) ? output.join("\n\n") : String(output);

    return NextResponse.json({ result });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
