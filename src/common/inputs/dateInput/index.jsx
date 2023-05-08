import { DatePicker, Form } from "antd"


import "./styles.scss"

const DateInput = ({ title, inputName, labeSize, requireInput, inputMessage }) => {

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
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

                <DatePicker onChange={onChange} />
            </Form.Item>
        </div>
    )
}

export default DateInput