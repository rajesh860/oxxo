import { Form, Input } from "antd"


import "./styles.scss"
const BasicInput = ({ title, inputName, labeSize, requireInput, inputMessage }) => {
    return (
        <div className="input-box">
            <Form.Item
                label={title}
                name={inputName}
                labelCol={{ span: labeSize }}
                rules={[
                    {
                        required: requireInput,
                        message: inputMessage,
                    },
                ]}
            >
                <Input />
            </Form.Item>
        </div>
    )
}

export default BasicInput