export default function Topbar(props) {
    
    if(props.log === true) {
        return (
            <div className="topbar">
                <div className="pageTitle">
                    <h2>Log</h2>
                    <h3>New Workout</h3>
                </div>
                <div className="line"></div>
            </div>
        )
    }else{
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
