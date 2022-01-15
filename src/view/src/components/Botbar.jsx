import {Dashboard, DateRange} from '@material-ui/icons'

export default function Botbar() {
    return (
        <div className="botbar">
            <div className="menu"><Dashboard/></div>
            <div className="add">+</div>
            <div className="calendar"><DateRange/></div>
        </div>
    )
}