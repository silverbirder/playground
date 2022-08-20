import { useState } from "react";
import "./App.css";

import { createConnectTransport, Interceptor } from "@bufbuild/connect-web";

// Import service definition that you want to connect to.
import { ElizaService } from "../gen/buf/connect/demo/eliza/v1/eliza_connectweb";
import { useClient } from "./client";

const logger: Interceptor = (next) => async (req) => {
  const res = await next(req);
  if (res.stream) {
    // to intercept streaming response messages, we override
    // the read() method of the response
    return {
      ...res,
      async read() {
        console.log("message received");
        return await res.read();
      },
    };
  } else {
    console.log("message:", res.message);
    return res;
  }
};
// The transport defines what type of endpoint we're hitting.
// In our example we'll be communicating with a Connect endpoint.
const transport = createConnectTransport({
  baseUrl: "https://demo.connect.build",
  interceptors: [logger],
});

function App() {
  const client = useClient(ElizaService, transport);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<
    {
      fromMe: boolean;
      message: string;
    }[]
  >([]);
  return (
    <>
      <ol>
        {messages.map((msg, index) => (
          <li key={index}>
            {`${msg.fromMe ? "ME:" : "ELIZA:"} ${msg.message}`}
          </li>
        ))}
      </ol>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          // Clear inputValue since the user has submitted.
          setInputValue("");
          // Store the inputValue in the chain of messages and
          // mark this message as coming from "me"
          setMessages((prev) => [
            ...prev,
            {
              fromMe: true,
              message: inputValue,
            },
          ]);
          const response = await client.say({
            sentence: inputValue,
          });
          setMessages((prev) => [
            ...prev,
            {
              fromMe: false,
              message: response.sentence,
            },
          ]);
        }}
      >
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default App;
