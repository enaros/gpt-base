import IconStars from "../Icons/Stars";

export default function TransactionHorizontalBar() {
  return (
    <div className="message message-assistant relative flex small-mobile:max-sm:text-sm -transition-height -duration-300 justify-left">
      <IconStars />
      <div className="message-inner bg-white text-black w-full max-w-[500px] rounded-3xl p-5 pl-12 pr-8 transition-[opacity, transform] duration-300 delay-250 relative text-sm md:text-base flex flex-col gap-2">
        <div>
          In the last 6 months you spent much more in Coop 🙈 <br /> Start
          saving now!
        </div>
        <div className="horizontal-bar primary">
          <div className="title">Coop</div>
          <div className="price">CHF 1'230.50</div>
          <div className="bar" style={{ width: "100%" }}></div>
        </div>
        <div className="horizontal-bar secondary">
          <div className="title">Migros</div>
          <div className="price">CHF 230.50</div>
          <div className="bar" style={{ width: "70%" }}></div>
        </div>
        <div className="horizontal-bar secondary">
          <div className="title">Aldi</div>
          <div className="price">CHF 30.50</div>
          <div className="bar" style={{ width: "7%" }}></div>
        </div>
      </div>
    </div>
  );
}
