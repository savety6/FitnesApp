import Home from "./pages/Home"
import Profile from "./pages/Profile"
// import LogNewWorkout from "./pages/LogNewWorkout"
// import AddExercise from "./pages/AddExercise"
import LoginSignin from "./pages/LoginSignin"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 


function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<LoginSignin/>}></Route>
                <Route path="/signin" element={<LoginSignin signin={true}/>}></Route>
                <Route path="/profile/:username" element={<Profile profile={true}/>}></Route>
            </Routes>
        </Router>
        
    )
}

export default App