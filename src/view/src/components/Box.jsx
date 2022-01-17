export default function Box(props) {
    if(props.select){
        return (
            <div className="wrapper">
                <div className="selection">
                    <div className="tag">
                        <span>Barbell Curll</span>
                        <i>X</i>
                    </div>
                    <div className="tag">
                        <span>bench press</span>
                        <i>X</i>
                    </div>
                    <div className="tag">
                        <span>pull down</span>
                        <i>X</i>
                    </div>
                    <div className="tag">
                        <span>pull up</span>
                        <i>X</i>
                    </div>
                    <div className="tag">
                        <span>squad</span>
                        <i>X</i>
                    </div>
                    <div className="tag">
                        <span>cabel row</span>
                        <i>X</i>
                    </div>
                    <div className="tag">
                        <span>hand extend</span>
                        <i>X</i>
                    </div>
                </div>
                <input type="text"/>
            </div>
        )
    }else{    
        return (
            <div className="wrapper">
                <div className="header">
                    <p className="title">Chest</p>
                    <p className="month">November</p>
                </div>
                <svg></svg>
            </div>
        )
    }
}
