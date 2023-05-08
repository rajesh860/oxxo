import { Button, Form, Input, Upload } from "antd"
import { AiFillFile } from "react-icons/ai"
import { BsLink45Deg } from "react-icons/bs"


import "./styles.scss"
const UploadImages = ({ settings, inputName, labelSize, title, poster, thumbnail, showInput, setShowInput, showChooseFile, setShowChooseFile }) => {


    const showInputHandler = () => {
        setShowInput(true)
        setShowChooseFile(false)
    }

    const showFileHandler = () => {
        setShowInput(false)
        setShowChooseFile(true)
    }

    return (
        <div className="input-box">
            <Form.Item
                label={title}
                name={inputName}
                labelCol={{ span: labelSize }}
            >

                {thumbnail && (
                    <div className="img-container">
                        <img src={thumbnail} alt="thumbnail" />
                    </div>
                )}

                {poster && (

                    <div className="img-container poster">
                        <img src={poster} alt="thumbnail" />
                    </div>
                )}

                {showInput && (
                    <Form.Item
                        name="inputLink"
                        labelCol={{ span: 24 }}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your link!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                )}

                {showChooseFile && (

                    <Upload {...settings} className="img-upload">
                        <Button>CHOOSE FILE</Button>
                    </Upload>
                )}

                <div className="btn-wrapper">
                    <Button className="btn-link" onClick={showInputHandler}>
                        <BsLink45Deg className="icon" />
                        LINK
                    </Button>
                    <Button className="btn-link file" onClick={showFileHandler} >
                        <AiFillFile className="icon" />
                        FILE
                    </Button>
                </div>
            </Form.Item>
        </div>
    )
}

export default UploadImages