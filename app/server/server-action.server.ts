import { ActionArgs } from "@remix-run/node";
import { Configuration, OpenAIApi } from "openai";
import context from "~/context";
import { ReturnedDataProps } from "~/routes";

/**
 * API call executed server side
 */
export async function action({
  request,
}: ActionArgs): Promise<ReturnedDataProps> {
  const body = await request.formData();
  const message = body.get("message") as string;
  const chatHistory = JSON.parse(body.get("chat-history") as string) || [];

  // store your key in .env
  const conf = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const openai = new OpenAIApi(conf);

    const chat = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      // model: "gpt-4",
      messages: [
        ...context,
        ...chatHistory,
        {
          role: "user",
          content: message,
        },
      ],
    });

    let answer = chat.data.choices[0].message?.content;

    if (answer?.includes("account balance")) {
      answer = "### account balance ###";
    }

    return {
      message: body.get("message") as string,
      answer: answer as string,
      chatHistory,
    };
  } catch (error: any) {
    return {
      message: body.get("message") as string,
      answer: "",
      error: error.message || "Something went wrong! Please try again.",
      chatHistory,
    };
  }
}
