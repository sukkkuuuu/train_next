"use client";
import Link from "next/link";
// import { useState } from "react";

export default function Home() {
  // const [input, setInput] = useState("");
  // const [message, setMessage] = useState("your name");
  // const doChange = (event) => {
  //   setInput(event.target.value);
  // };
  // const doClick = () => {
  //   setMessage("Hello" + input + "!!");
  //   setInput("");
  // };
  return (
    <main>
      <h1 className="title">Next.js sample.</h1>
      <p className="msg">This is other page sample</p>
      {/* <p className="msg">{message}</p> */}
      <div>
        <Link href="/other"> go other page</Link>
      </div>
      {/* <div className="m-5">
        <input
          type="text"
          onChange={doChange}
          value={input}
          className="input"
        />
        <button onClick={doClick} className="btn">
          Click
        </button>
      </div> */}
    </main>
  );
}
