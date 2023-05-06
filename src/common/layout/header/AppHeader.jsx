import { Image } from "antd";
import { Link } from "react-router-dom";
import appLogo from "../../../assets/icons/logo.png"

import { BiUser } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { AiTwotoneLock } from "react-icons/ai";

import ProfileAvatar from "../../../component/profileAvatar";

import "./styles.scss";

const AppHeader = ({ setCollapsed, collapsed }) => {

    const items = [
        {
            key: '1',
            icon: <BiUser />,
            label: (
                <Link to={"/profile"}>
                    Profile
                </Link>
            ),
        },
        {
            key: '2',
            icon: <AiTwotoneLock />,
            label: (
                <Link to={"/change-password"}>
                    Change Password
                </Link>
            ),
        },
        {
            key: '3',
            icon: <BiUser />,
            label: (
                <Link to={"/logout"}>
                    Logout
                </Link>
            ),
        },

    ];
    return (
        <>
            <div className="navbar-data">
                <div className="left">
                    <div className="logo">
                        <Link to="/">
                            <Image src={appLogo} alt="app-logo" style={{ width: 100, height: "auto" }} preview={false} />
                        </Link>
                    </div>

                    <div className="sidebar-toggle">
                        <HiMenu className="icon icon-menu" onClick={() => setCollapsed(!collapsed)} />
                    </div>
                </div>

                <div className="right">
                    <ProfileAvatar items={items} />
                </div>
            </div>
        </>
    )
}

export default AppHeader