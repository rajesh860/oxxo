import { AutoComplete, Form } from "antd"


import "./styles.scss"
const InputSuggestion = ({ options, title, inputName, onSelect, onChange, setAnotherOptions, getPanelValue, inputMessage, inputRequire, labelSize }) => {

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
                <AutoComplete
                    options={options}
                    onSelect={onSelect}
                    onSearch={(text) => setAnotherOptions(getPanelValue(text))}
                    onChange={onChange}
                />
            </Form.Item>
        </div>
    )
}

export default InputSuggestion