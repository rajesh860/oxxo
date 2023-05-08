
import { Form } from "antd";
import { Editor } from "primereact/editor";
const TextEditor = ({ text, title, inputName, setText, labeSize, requireInput, inputMessage }) => {
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

                <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
            </Form.Item>
        </div>
    )
}

export default TextEditor