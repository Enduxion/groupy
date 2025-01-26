import { BrowserRouter, Routes, Route } from "react-router-dom";

import Feed from "./Pages/Feed/Feed";
import Friends from "./Pages/Friends/Friends";
import Profile from "./Pages/Profile/Profile";
import Post from "./Pages/Post/Post";

import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App