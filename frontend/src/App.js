import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Sidebar from "./components/Sidebar";
import Chatbox from "./components/Chatbox";
import Settings from "./pages/Settings";
import Groups from "./pages/Gruops";
import Contacts from "./pages/Contacts";
import Messages from "./pages/Messages";

const App = () => {
  return (
    <BrowserRouter>
      <InnerApp />
    </BrowserRouter>
  );
};

const InnerApp = () => {
  const location = useLocation();
  const noSidebarAndChatboxPaths = ["/signin", "/signup"];

  return (
    <div className="App">
      {!noSidebarAndChatboxPaths.includes(location.pathname) && <Sidebar />}
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
      {!noSidebarAndChatboxPaths.includes(location.pathname) && <Chatbox />}
    </div>
  );
};

export default App;
