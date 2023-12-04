import { useEffect, useRef, useState } from "react";

export default function useMessageAnimation() {
  const rendered = useRef<null | boolean>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const messageWrapRef = useRef<HTMLDivElement>(null);
  const [messageHeight, setMessageHeight] = useState(0);

  const handleTransitionEnd = () => {
    const theMessageWrap = messageWrapRef.current;
    if (!theMessageWrap) {
      return;
    }

    theMessageWrap.removeAttribute("style");
  };

  useEffect(() => {
    const theMessage = messageRef.current;

    if (rendered.current !== null || !theMessage) {
      return;
    }

    rendered.current = true;

    const contentHeight = theMessage.scrollHeight;
    const containerStyle = window.getComputedStyle(theMessage.parentElement!);
    const paddingTop = parseFloat(containerStyle.paddingTop);
    const paddingBottom = parseFloat(containerStyle.paddingBottom);
    const totalHeight = contentHeight + paddingTop + paddingBottom;

    setMessageHeight(totalHeight);
  }, []);

  useEffect(() => {
    const theMessageWrap = messageWrapRef.current;
    if (!theMessageWrap) {
      return;
    }

    theMessageWrap.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      theMessageWrap.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);

  return {
    rendered,
    messageRef,
    messageWrapRef,
    messageHeight,
  };
}
