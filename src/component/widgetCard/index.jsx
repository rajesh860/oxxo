

import "./styles.scss"

const WidgetCard = ({ data }) => {


    const { Icon, title, subTitle, colorClassBg, colorClassIcon } = data
    return (
        <div className={`widget-card ${colorClassBg} ${colorClassIcon}`}>
            <Icon className={`icon icon-video ${colorClassBg}`} />
            <div className="info">
                <h4>{title}</h4>
                <p>{subTitle}</p>
            </div>
        </div>
    )
}

export default WidgetCard