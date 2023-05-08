import { Button } from "antd"
import { Link } from "react-router-dom"


import "./styles.scss"


const ButtonWithIcon = ({ btnText, addClass, urlPath, submitType, btnIcon }) => {
    return (
        <div className={`btn-with-icon ${addClass}`}>
            <Link to={urlPath}>
                <Button htmlType={submitType}>{btnIcon}{btnText}</Button>
            </Link>
        </div>
    )
}

export default ButtonWithIcon