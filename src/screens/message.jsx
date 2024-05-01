import React from "react";
import One from '../assets/one.jpg';
function Message() {
  return (
    <div className="message">
      <p className="message-content">Hi</p>
      <img className="message-avatar" src={One} />
    </div>
  );
}

export default Message;
