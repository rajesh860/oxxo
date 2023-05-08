
import { useEffect, useState } from "react";
import { GrFormAdd } from "react-icons/gr"
import LayoutContent from "../../../common/layoutContent"
import ImportMoviesFilter from "../../../component/importMoviesFilter"
import { Col, Row, Form, Button, message } from "antd";

import thumbnail from "../../../assets/img/thumbnail.jpg"
import poster from "../../../assets/img/poster.jpg"

import BasicInput from "../../../common/inputs/basicInput";
import InputSuggestion from "../../../common/inputs/inputSuggestions";
import SelectInput from "../../../common/inputs/selectInput";
import InputSwitch from "../../../common/inputs/inputSwitch";
import UploadImages from "../../../component/uploadImage";

import "./styles.scss"
import DateInput from "../../../common/inputs/dateInput";
import MultipleSelect from "../../../common/inputs/multipleSelection";
import TextEditor from "../../../component/editor";
const AddMovies = () => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);

    const [anotherOptions, setAnotherOptions] = useState([]);

    const [text, setText] = useState('');

    const [showInput, setShowInput] = useState(false)

    const [showChooseFile, setShowChooseFile] = useState(true)

    // form - inputs

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    // form - inputs-Error 
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const getPanelValue = (searchText) =>
        !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];


    const onSelect = (data) => {
        console.log('onSelect', data);
    };
    const onChange = (data, checked, value) => {
        setValue(data);
        console.log(`switch to ${checked}`);

    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);

    };


    const selectOption = [
        {
            value: 'free',
            label: 'Free',
        },
        {
            value: 'paid',
            label: 'Paid',
        },

    ]

    // Upload_img-Settings


    const settings = {
        name: "file",
        multiple: false,
        beforeUpload: () => {
            return false;
        },
        onChange: (info) => {
            if (info.file.status !== "uploading") {
                console.log(info, "===========");
            }
        }
    };

    const selectedCountry = [];
    for (let i = 10; i < 36; i++) {
        selectedCountry.push({
            label: i.toString(36) + i,
            value: i.toString(36) + i,
        });
    }

    // Country-Change-Input
    const countryChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <LayoutContent title="Videos add">
            <div className="add-movies-container">
                <div className="import-movies-header">
                    <ImportMoviesFilter />
                </div>
                <div className="add-movies-input">
                    <Form
                        name="basic"

                        initialValues={{
                            remember: true,
                        }}

                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >

                        <Row gutter={[30, 0]}>
                            <Col lg={12} md={24}>
                                <div className="add-movie">
                                    <div className="header">
                                        <h3>Movie Info</h3>
                                    </div>

                                    <div className="input-fields">

                                        <BasicInput labeSize={24} requireInput={true} inputMessage={`Input your title please!`} title={"Title"} inputName={`title`} />

                                        <BasicInput labeSize={24} requireInput={true} inputMessage={`Input your title please!`} title={`Slug (https://oxoo.spagreen.net/demo/php/v13/watch/slug)`} inputName={`slug`} />

                                        <TextEditor text={text} setText={setText} title={`Description`} inputName={`description`} inputMessage={`Please input the description!`} labeSize={24} />

                                        <InputSuggestion options={options} title={`Actor`} inputName={"actor"} onSelect={onSelect} onChange={onChange} setAnotherOptions={setAnotherOptions} getPanelValue={getPanelValue} labelSize={24} inputMessage={"error-message"} inputRequire={true} />

                                        <InputSuggestion options={options} title={`Directors`} inputName={"directors"} onSelect={onSelect} onChange={onChange} setAnotherOptions={setAnotherOptions} getPanelValue={getPanelValue} labelSize={24} inputMessage={"error-message"} inputRequire={true} />


                                        <InputSuggestion options={options} title={`Writers`} inputName={"writers"} onSelect={onSelect} onChange={onChange} setAnotherOptions={setAnotherOptions} getPanelValue={getPanelValue} labelSize={24} inputMessage={"error-message"} inputRequire={true} />

                                        <BasicInput labeSize={24} requireInput={true} inputMessage={`Input your title please!`} title={`IMDb Ratings`} inputName={`imdbRatings`} />

                                        <DateInput title={`Release Date`} labeSize={24} inputName={`releaseDate`} requireInput={true} inputMessage={`Input your date please!`} />



                                        <MultipleSelect title={`Countries`} inputName={`countries`} labeSize={24} requireInput={true} inputMessage={`Select the countries please`} countryChange={countryChange} selectedCountry={selectedCountry} />


                                        <MultipleSelect title={`Genres`} inputName={`genres`} labeSize={24} requireInput={true} inputMessage={`Select the countries please`} countryChange={countryChange} selectedCountry={selectedCountry} />

                                        <InputSuggestion options={options} title={`Runtime`} inputName={"runtime"} onSelect={onSelect} onChange={onChange} setAnotherOptions={setAnotherOptions} getPanelValue={getPanelValue} labelSize={24} inputMessage={"error-message"} inputRequire={true} />


                                        <SelectInput labelSize={24} title={"Free/Paid"} inputRequire={true} inputMessage={"error-msg"} inputName={`freePaid`} handleChange={handleChange} selectOption={selectOption} />

                                        <InputSuggestion options={options} title={`Trailer URL(YouTube Only)`} inputName={"trailerUrl"} onSelect={onSelect} onChange={onChange} setAnotherOptions={setAnotherOptions} getPanelValue={getPanelValue} labelSize={24} inputMessage={"error-message"} inputRequire={true} />

                                    </div>

                                </div>
                            </Col>
                            <Col lg={12} md={24}>
                                <div className="additional-info">
                                    <div className="header">
                                        <h3>Additional Info</h3>
                                    </div>

                                    <div className="input-fields">

                                        <SelectInput labelSize={24} title={"Video Quality"} inputName={`videoQuality`} inputRequire={true} inputMessage={"error-msg"} handleChange={handleChange} selectOption={selectOption} />

                                        {/* Thumbnails-Upload */}
                                        <div className="thumbnail-upload">
                                            <UploadImages title={`Thumbnail`} labelSize={24} settings={settings} thumbnail={thumbnail} showInput={showInput} setShowInput={setShowInput} showChooseFile={showChooseFile} setShowChooseFile={setShowChooseFile} />
                                        </div>

                                        {/* Poster-Upload */}

                                        <div className="poster-upload">
                                            <UploadImages title={`Poster`} labelSize={24} settings={settings} poster={poster} showInput={showInput} setShowInput={setShowInput} showChooseFile={showChooseFile} setShowChooseFile={setShowChooseFile} />
                                        </div>

                                        <div className="check-permissions">
                                            <InputSwitch title={`Send Email Newslatter to Subscriber`} inputName={`emailNewsLater`} labelSize={24} size={"small"} onChange={onChange} />

                                            <InputSwitch title={`Send Push Notification to Subscriber`} inputName={`pushNotification`} labelSize={24} size={"small"} onChange={onChange} />

                                            <InputSwitch title={`Publish`} inputName={`publish`} size={"small"} labelSize={24} onChange={onChange} />

                                            <InputSwitch title={`Enable Download`} inputName={`enableDownload`} labelSize={24} size={"small"} onChange={onChange} />

                                            <Form.Item
                                                labelCol={{ span: 24 }}
                                                className="create-poster-thumbnail"
                                            >
                                                <Button htmlType="submit"><GrFormAdd className="icon" /> CREATE</Button>
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </LayoutContent >
    )
}

export default AddMovies