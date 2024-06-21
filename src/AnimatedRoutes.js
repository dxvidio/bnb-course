import { Routes, Route, useLocation } from "react-router-dom"

import Homepage from "./Homepage";
import Course from "./Course";

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/course" element={<Course/>}/>
        </Routes>
    );
}

export default AnimatedRoutes;