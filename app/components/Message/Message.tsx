import cn from "classnames";
import ReactMarkdown from "react-markdown";

import useMessageAnimation from "~/hooks/useMessageAnimation";

import { Role } from "~/types";
import userImg from "~/img/user.png";
import TransactionList from "../TransactionList/TransactionList";

export interface MessageProps {
  content: string;
  key?: string;
  role?: Role;
  error?: boolean;
  thinking?: boolean;
}

/**
 * Renders a message
 */
export default function Message({
  content,
  error,
  role = "user",
  thinking = false,
}: MessageProps) {
  const { rendered, messageRef, messageWrapRef, messageHeight } =
    useMessageAnimation();

  if (content === "### account balance ###") return <TransactionList />;

  return (
    <div
      className={cn(
        `message message-${role} flex small-mobile:max-sm:text-sm -transition-height -duration-300 justify-left`,
        // role === 'user' ? 'justify-end' : 'justify-start',
        thinking ? "w-[100px]" : "",
        error && "text-error"
      )}
      ref={messageWrapRef}
      style={{ height: `${messageHeight}px`, overflow: "hidden" }}
    >
      <div
        className={cn(
          "message-inner w-full space-x-4 max-w-[500px] rounded-3xl p-5 pl-8 pr-8 transition-[opacity, transform] duration-300 delay-250 relative text-sm md:text-base",
          role === "user" ? "bg-none text-gray-700" : "bg-white text-black",
          rendered.current
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-7"
        )}
      >
        <div
          className={cn("response", role === "user" ? "flex items-center" : "")}
          ref={messageRef}
        >
          {role === "user" && (
            <div className="user">
              <img src={userImg} />
            </div>
          )}
          {thinking ? (
            <div className="flex gap-[5px] min-h-[20px] sm:min-h-[24px] items-center">
              <span className="thinking-bubble animate-thinking-1" />
              <span className="thinking-bubble animate-thinking-2" />
              <span className="thinking-bubble animate-thinking-3" />
            </div>
          ) : (
            <div>
              <ReactMarkdown children={content} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
