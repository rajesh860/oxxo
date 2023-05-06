import PageHeader from "../pageHeader"


import "./styles.scss"

const LayoutContent = ({ children, title }) => {
    return (
        <div className="layout-content-main">
            <PageHeader title={`${title}`} />
            {children}
            <div className="dashboard-footer">
                <p>
                    2023 © <a href="">OxOO - v1.3.9.c</a>  |
                    Developed by: <a href="">SpaGreen Creative</a>
                </p>
            </div>
        </div>
    )
}

export default LayoutContent