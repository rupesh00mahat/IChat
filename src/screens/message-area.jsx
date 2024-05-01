import React from "react";
import "../style.css";
import Message from './message';
import One from '../assets/one.jpg'
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";

function MessageArea(props) {
  return (
    <div id="message-area">
      <div className="message-area-header">Header</div>
      <div className="messsage-area-texts">
        <div className="message-list">
           <Message/>
           <Message/>
           <Message/>
        </div>
      </div>
      <div className="user-input-area">
        <input className='user-input-field' type='text'/>
        <input className="user-file-upload" style={{display: 'none'}} type="file" id="file"/>
        <label className="upload-label" htmlFor="file">
        <MdOutlineDriveFolderUpload />
        </label>
        <input className="user-image-upload" id="image" style={{display: 'none'}} type="image" src={One}/>
        <label className="upload-label" htmlFor="image">
        <CiImageOn />

        </label>
        <input type="submit"/>
      </div>
    </div>
  );
}

export default MessageArea;
