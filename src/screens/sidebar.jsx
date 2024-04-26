import React from 'react'

function Sidebar() {
  return (
    <div id='sidebar'>
      <div className='sidebar-header'>
      <h2>Ichat</h2>
      <div className='sidebar-header-user-info'>
        <img src=''/>
        <span className='user-name'>UserName</span>
        <button className='logout-button'>logout</button>
      </div>
      </div>
        <section id='user-list'>
          <p>Find a user</p>
          <div className='users'>
              <div className='user-one'>
                <img src=''/>
                <div className='user-info'>
                  <p className='user-info-name'>Username</p>
                  <p className='user-info-message'>Recent message</p>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default Sidebar