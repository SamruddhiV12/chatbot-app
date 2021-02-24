import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import React from 'react';
import './Chat.css';
// import myFunction from './Bot'

let myInit = {
    method: "GET",
    headers: {
        "Content-Type": "appliation/json",
    },
    mode: "cors",
    cache: "default",
};

let myReq = new Request("http://localhost:8000/intents", myInit);

function myFunction() {
    fetch(myReq)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            // document.getElementById("demo").innerHTML;
            // console.log(data);
            var h = document.createElement("BUTTON");
            var t = document.createTextNode(data[1].tag);
            h.appendChild(t);
            document.body.appendChild(h);
            // ------------------------ To create link
            var a = document.createElement("a");
            // Create the text node for anchor element.
            var link = document.createTextNode(data[1].tag);
            // Append the text node to anchor element.
            a.appendChild(link);
            // Set the href property.
            a.href = data[1].link;
            // Append the anchor element to the body.
            document.body.appendChild(a);
        });
}

function Chat({ messages }) {
    return (
        <div className="chat">

            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>

                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map((message) => (
                    <p className={`chat__message ${message.recieved && "chat__reciever"}`}>
                        <span className="chat__name">{messages.name}</span>
                        {message.message}
                        <span className="chat__timestamp">
                            {message.timestamp}
                        </span>
                        <button
                            type="button"
                            id="demo"
                            onClick={myFunction}
                        >
                            Warning
            </button>
                    </p>
                ))}
            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <form>
                    <input placeholder="type a message"
                        type="text" />
                    <button type="submit">Send a Message</button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div >
    )
}

export default Chat;