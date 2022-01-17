import {DateRange} from '@material-ui/icons'
import {DirectionsRun} from '@material-ui/icons'

export default function Topbar(props) {
    
    if(props.log === true) {

        let icon 
        if(props.action ==='Add'){
            icon = <div className="timepick">
                        <DirectionsRun/>
                        <p>biceps</p>
                    </div>
        }else{
            icon = <div className="timepick">
                        <DateRange/>
                        <p>11/12/2021</p>
                    </div>
        }

        return (
            <div className="topbar">
                <div className="pageTitle">
                    <h2>{props.action}</h2>
                    <h3>{props.title}</h3>
                </div>
                <div className="line"></div>
                <p>{props.masage}</p>
                {icon}
            </div>
        )
    }
    else if(props.profile === true){
        <div className="topbar">
            
        </div>
    }
    else{
        return (
            <div className="topbar">
                <div className="header">
                    <h1>Welcome, <p>Pesho</p></h1>
                    <img src="/assets/images.jpg" alt="" className="yourImg"/>
                </div>
                <div className="summary">
                    <p>Your Fitness Summary</p>
                    <select name="cars" id="cars">
                        <option value="volvo">January</option>
                        <option value="saab">February</option>
                        <option value="opel">March</option>
                        <option value="audi">April</option>
                    </select>
                </div>
            </div>
        )
    }
}
