import Topbar from "../components/Topbar"
import Botbar from "../components/Botbar"
import SideScroll from "../components/SideScroll"
import Statistics from "../components/Statistics"

export default function home() {
    return (
        <div>
            <Topbar/>
            <SideScroll/>
            <Statistics/>
            <Botbar/>
        </div>
    )
}
