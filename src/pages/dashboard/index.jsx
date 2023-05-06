// Styles
import { Col, Row, Table } from "antd"
import PageHeader from "../../common/pageHeader"


import { columns, data, widgetCards } from "./data"
import WidgetCard from "../../component/widgetCard"

import "./styles.scss"

const Dashboard = () => {
    return (
        <div>
            <PageHeader title={`Admin Dashboard`} />

            <div className="dashboard-content">
                <Row>
                    <Col lg={24}>
                        <Row gutter={[30, 50]}>
                            {widgetCards?.map((curElm, i) => {
                                return (
                                    <Col lg={6} md={8} sm={12} xs={24} key={i}>
                                        <WidgetCard data={curElm} />
                                    </Col>
                                )
                            })}

                        </Row>
                    </Col>
                </Row>


                <div className="panels">

                    <Row gutter={[0, 30]}>
                        <Col lg={24}>
                            <Row gutter={[30, 0]}>
                                <Col lg={12}>
                                    <h3 className="heading">MOST POPULAR MOVIES</h3>
                                    <Table columns={columns} dataSource={data} />
                                </Col>

                                <Col lg={12}>
                                    <h3 className="heading">TOP RATED MOVIES</h3>
                                    <Table columns={columns} dataSource={data} />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={24}>
                            <Row gutter={[30, 0]}>
                                <Col lg={12}>
                                    <h3 className="heading">TOP VIEW TODAY</h3>
                                    <Table columns={columns} dataSource={data} />
                                </Col>
                                <Col lg={12}>
                                    <h3 className="heading">RECENT SUBSCRIBER</h3>
                                    <Table columns={columns} dataSource={data} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className="dashboard-footer">
                <p>
                    2023 © <a href="">OxOO - v1.3.9.c</a>  |
                    Developed by: <a href="">SpaGreen Creative</a>
                </p>
            </div>
        </div>
    )
}

export default Dashboard