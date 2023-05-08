import { Form, Switch } from "antd"

const InputSwitch = ({ onChange, title, size, labelSize, inputName }) => {

    return (
        <div className="input-box">
            <Form.Item
                label={title}
                name={inputName}
                labelCol={{ span: labelSize }}
            >
                <Switch onChange={onChange} size={size} />
            </Form.Item>
        </div>
    )
}

export default InputSwitch