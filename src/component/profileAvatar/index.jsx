import { Avatar, Button, Dropdown } from "antd"
import { BiUser } from "react-icons/bi"


import "./styles.scss"

const ProfileAvatar = ({ items }) => {

    return (
        <>
            <div className="profile-sec" style={{ paddingRight: "30px" }}>
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottomLeft"
                >
                    <Button>
                        <Avatar icon={<BiUser />} />
                    </Button>
                </Dropdown>
            </div>
        </>
    )
}

export default ProfileAvatar