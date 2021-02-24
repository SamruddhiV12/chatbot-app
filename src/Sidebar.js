import React from 'react';
import './Sidebar.css';
import { /*Avatar,*/ IconButton } from '@material-ui/core';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">

            
                
    {/* 
    <div className="sidebar__header">
    <Avatar />
    
    <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>


                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>



    </div> 
    </div>
    
    */}
            

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or type text here" type="text" />
                </div>
            </div>

            <div className="sidebar__chats">
<SidebarChat/>
<SidebarChat/>
<SidebarChat/>
            </div>
            <div className=" sidebar__button">
                <IconButton>
                <ControlPointIcon fontSize="large"/>
                </IconButton>

            </div>
        </div>
    );
}

export default Sidebar;
