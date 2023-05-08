

import { Col, Form, Row, Table } from "antd"
import LayoutContent from "../../../common/layoutContent"
import ButtonWithIcon from "../../../common/buttons/buttonsWithIcon"
import { HiPlus } from "react-icons/hi"
import { RiSearchLine } from "react-icons/ri"

import BasicInput from "../../../common/inputs/basicInput"
import "./styles.scss"
import SelectInput from "../../../common/inputs/selectInput"
import { columns, data } from "./data"

const AllMovies = () => {

    const options = [
        {
            value: 'published',
            label: 'Published',
        },
        {
            value: 'unpublished',
            label: 'Unpublished',
        },


    ]

    const dateOptions = [
        {
            value: `2023`,
            label: `2023`
        }
    ]

    return (
        <LayoutContent title="Videos Management">

            <div className="all-movies-container">

                <div className="all-movie-content">
                    <Form>
                        <div className="filter-header">
                            <Row>
                                <Col lg={16}>
                                    <div className="left">
                                        <ButtonWithIcon btnText={`Add Movies`}
                                            urlPath={`/add-movies`} btnIcon={<HiPlus className="icon icon-plus" />} />
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="right">
                                        <Row gutter={[25, 0]}>
                                            <Col lg={7}>
                                                <BasicInput />
                                            </Col>
                                            <Col lg={6}>
                                                <SelectInput selectOption={dateOptions} defaultVal={`All Release`} />
                                            </Col>
                                            <Col lg={6}>
                                                <SelectInput selectOption={options} defaultVal={`All`} />
                                            </Col>
                                            <Col lg={5}>
                                                <Form.Item>
                                                    <ButtonWithIcon btnText={`Search`} submitType={'submit'} btnIcon={<RiSearchLine className="icon icon-search" />} />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>


                        <div className="all-movie-table">
                            <Table columns={columns} pagination={{
                                position: [`bottomLeft`],
                            }}
                                dataSource={data} />
                        </div>

                    </Form>
                </div>
            </div>

        </LayoutContent>
    )
}

export default AllMovies