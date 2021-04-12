import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import './Header.css'
import {
    Add, ExpandMore,
    Forum,
    NotificationsActive,
    StorefrontOutlined,
    SubscriptionsOutlined,
    SupervisedUserCircle
} from "@material-ui/icons";
import {Avatar, IconButton} from "@material-ui/core";
import {useStateValue} from "./StateProvider";
function Header() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook" />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder='Search Facebook' type="text"></input>
                </div>
            </div>
            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlined fontSize="large" />
                </div>

                <div className="header__option">
                    <StorefrontOutlined fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircle fontSize="large"/>
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <Add></Add>
                </IconButton>
                <IconButton>
                    <Forum></Forum>
                </IconButton>
                <IconButton>
                    <NotificationsActive></NotificationsActive>
                </IconButton>
                <IconButton>
                    <ExpandMore></ExpandMore>
                </IconButton>
            </div>
        </div>
    )
}
 
export default Header
