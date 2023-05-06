// Styles
import { Col, Row, Table } from "antd"

import { columns, data, widgetCards } from "./data"
import WidgetCard from "../../component/widgetCard"

import "./styles.scss"
import LayoutContent from "../../common/layoutContent"

const Dashboard = () => {
    return (
        <LayoutContent title="Admin Dashboard">

            <div className="dashboard-content">
                <Row>
                    <Col lg={24}>
                        <Row gutter={[30, 50]}>
                            {widgetCards?.map((curElm, i) => {
                                return (
                                    <Col xl={6} lg={8} md={12} sm={24} xs={24} key={i}>
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
                            <Row gutter={[30, 35]}>

                                {
                                    [1, 2, 3, 4].map((curElm, i) => {
                                        return (
                                            <Col lg={12} key={i + curElm}>
                                                <h3 className="heading">MOST POPULAR MOVIES</h3>
                                                <Table columns={columns} dataSource={data} />
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>


        </LayoutContent>
    )
}

export default Dashboard