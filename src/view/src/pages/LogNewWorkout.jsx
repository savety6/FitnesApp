import Topbar from "../components/Topbar"
import Botbar from "../components/Botbar"
import Box from "../components/Box"


export default function LogNewWorkout() {
    return (
        <>
            <Topbar log={true} action='Log' title='New Workout' masage='When did you workout'/>
            <br />
            <div className="information">
                <p>Add exercise to your workout</p>
                <Box/>
                <Box/>
                <Box/>
                <div className="btn">
                    <p>Add New Exercise</p>
                    <span>+</span>
                </div>
            </div>
            <Botbar/>
        </>
    )
}