"use client";

import { useEffect, useRef, useState } from "react";

type MessageProps = {
  initialValue?: string;
};

export default function Message(props: MessageProps) {
  const [value, setValue] = useState(props.initialValue || "");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;

    if (!input) return;

    input.style.width = "50px";

    const width = Math.min(input.scrollWidth, 300);
    input.style.width = `${width}px`;

    fetch("./api", {
      method: "POST",
      body: JSON.stringify({ whom: value || "world" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  });

  return (
    <p className="text-center text-lg sm:text-left">
      Hello{" "}
      <input
        id="message-input"
        ref={inputRef}
        className="border-b-2 w-[50px] border-gray-300 focus:border-blue-500 focus:outline-none"
        placeholder="World"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      !
    </p>
  );
}
