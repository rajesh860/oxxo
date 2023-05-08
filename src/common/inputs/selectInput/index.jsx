import { Form, Select } from "antd"

import "./styles.scss"
const SelectInput = ({ labelSize, title, inputName, defaultVal, inputRequire, inputMessage, handleChange, selectOption }) => {
    return (

        <div className="input-box">
            <Form.Item
                label={title}
                name={inputName}
                labelCol={{ span: labelSize }}
                rules={[
                    {
                        required: inputRequire,
                        message: inputMessage,
                    },
                ]}
            >
                <Select
                    defaultValue={defaultVal}
                    style={{
                        width: "100%",
                    }}
                    onChange={handleChange}
                    options={selectOption}
                />
            </Form.Item>
        </div>
    )
}

export default SelectInput