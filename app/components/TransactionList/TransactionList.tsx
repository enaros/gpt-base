import cn from "classnames";
import IconBank from "../Icons/Bank";
import IconStars from "../Icons/Stars";
import IconWallet from "../Icons/Wallet";
import useMessageAnimation from "~/hooks/useMessageAnimation";

export default function TransactionList() {
  const { rendered, messageRef, messageWrapRef, messageHeight } =
    useMessageAnimation();

  return (
    <div
      className="message message-assistant relative flex small-mobile:max-sm:text-sm -transition-height -duration-300 justify-left"
      ref={messageWrapRef}
      style={{ height: `${messageHeight}px`, overflow: "hidden" }}
    >
      <IconStars />
      <div
        className={cn(
          "message-inner bg-white text-black w-full max-w-[500px] rounded-3xl p-5 pl-12 pr-8 transition-[opacity, transform] duration-300 delay-250 relative text-sm md:text-base",
          rendered.current
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-7"
        )}
      >
        <div ref={messageRef} className="response flex flex-col gap-2">
          <div>Your account balance is 14'523.67</div>
          <div className="transaction-list-item first">
            <div className="icon">
              <IconWallet />
            </div>
            <div className="title">Main Account</div>
            <div className="price">CHF 1'230.50</div>
          </div>
          <div className="transaction-list-item">
            <div className="icon">
              <IconBank />
            </div>
            <div className="title">Account</div>
            <div className="price">CHF 230.50</div>
          </div>
          <div className="transaction-list-item">
            <div className="icon">
              <IconWallet />
            </div>
            <div className="title">Monthly Expenses</div>
            <div className="price">CHF 30.50</div>
          </div>
        </div>
      </div>
    </div>
  );
}
