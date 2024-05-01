import React from 'react'
import One from "../assets/one.jpg";

function UserInfoComponent() {
  return (
    <div className="user-info">
              <img className="user-info-avatar" src={One} />
              <div className="user-info-content">
                <h3 className="user-info-name">Jane Doe</h3>
                <p className="user-info-message">Hello</p>
              </div>
            </div>
  )
}

export default UserInfoComponent