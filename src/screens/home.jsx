import React from 'react'
import Sidebar from './sidebar'
import MessageArea from './message-area'

function Home(props) {
  return (
    <div id='ichat-home'>
        <Sidebar/>
        <MessageArea/>
    </div>
  )
}

export default Home