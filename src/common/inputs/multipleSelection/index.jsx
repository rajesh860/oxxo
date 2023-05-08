import { Form, Select } from "antd"


const MultipleSelect = ({ title, inputName, labeSize, requireInput, inputMessage, countryChange, selectedCountry }) => {
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
                ]}>
                <Select
                    mode="multiple"
                    allowClear
                    style={{
                        width: '100%',
                    }}
                    onChange={countryChange}
                    options={selectedCountry}
                />
            </Form.Item>
        </div>
    )
}

export default MultipleSelect