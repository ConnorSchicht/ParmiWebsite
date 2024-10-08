import { useState } from "react";

const Replies = () => {
  const [reply, setReply] = useState("");

  const handleSubmitReply = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log({ reply });

    setReply("");
  };

  return (
    <main className="replies">
      <form className="modal__content" onSubmit={handleSubmitReply}>
        <label htmlFor="reply">Reply to the thread</label>

        <textarea
          rows={5}
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          name="reply"
          className="modalInput"
        />

        <button className="modalBtn">SEND</button>
      </form>
    </main>
  );
};

export default Replies;
