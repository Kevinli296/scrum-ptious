import React from 'react';

export default function ChatLogItem(props) {
  const { avatar, sender, message, time_sent } = props;
  return (
    <div className="chat-item">
      <img className="chat-item-avatar" alt="Employee Avatar" src={avatar}></img>
      <div className="chat-item-right">
        <div className="chat-message-sender">{sender}</div>
        <div className="chat-message">{message}</div>
      </div>
      <span className="chat-message-time">{time_sent}</span>
    </div>
  )
}