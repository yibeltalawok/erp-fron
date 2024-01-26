import React from "react";
import { Route, Routes} from "react-router-dom";
import Home from './components/pages/home';
import Addfile from './components/pages/addfile';
import Login from './components/users/login';
import Image from "./components/pages/images";
import Audios from "./components/pages/audios";
import Videos from "./components/pages/videos";
import Files from "./components/pages/files";
import Loading from "./components/pages/Loading";

function App() {
  return (
  <>
  {/* <Loading /> */}
    <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/addfile" element={<Addfile/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/images" element={<Image/>}></Route>
       <Route path="/audios" element={<Audios/>}></Route>
       <Route path="/videos" element={<Videos/>}></Route>
       <Route path="/files" element={<Files/>}></Route>
    </Routes>
  </>
  );
}
export default App;
