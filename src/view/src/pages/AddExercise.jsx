import Topbar from "../components/Topbar"
import Botbar from "../components/Botbar"
import Box from "../components/Box"

export default function AddExercise() {
    return (
        <div>
            <Topbar log={true} action='Add' title='New Exercise' masage='Choose muscle group'/>
            <div className="information">
                <p>Select type of exercise</p>
                <Box select={true}/>
                <Box/>
            </div>
            <Botbar/>
        </div>
    )
}
