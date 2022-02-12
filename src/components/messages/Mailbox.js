import React from 'react'

const MailBox = (props) => {
  const unreadMessages = props.unreadMessages;

  return (
    <div>
      {unreadMessages.length > 0 && <h2>Количество непрочитанных сообщений {unreadMessages.length}</h2>}
    </div>
  )
}

export default MailBox