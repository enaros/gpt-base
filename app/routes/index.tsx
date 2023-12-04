import { ChatCompletionRequestMessage } from "openai";

import { Link } from "@remix-run/react";

import Chat from "~/components/Chat";
import { action } from "~/server/server-action.server";

export interface ReturnedDataProps {
  message?: string;
  answer: string;
  error?: string;
  chatHistory: ChatCompletionRequestMessage[];
}

export interface ChatHistoryProps extends ChatCompletionRequestMessage {
  error?: boolean;
}

/**
 * API call executed server side
 */
export { action };

export default function IndexPage() {
  return <Chat />;
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <main className="container mx-auto rounded-lg h-full grid grid-rows-layout p-4 pb-0 sm:p-8 sm:pb-0 max-w-full sm:max-w-auto">
      <div className="chat-container">
        <div className="intro grid place-items-center h-full text-center">
          <div className="intro-content inline-block px-4 py-8 border border-error rounded-lg">
            <h1 className="text-3xl font-semibold">
              Oops, something went wrong!
            </h1>
            <p className="mt-4 text-error ">{error.message}</p>
            <p className="mt-4">
              <Link to="/">Back to chat</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
