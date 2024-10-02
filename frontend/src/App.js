import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Sidebar from "./components/Sidebar";
import Chatbox from "./components/Chatbox";
import Settings from "./pages/Settings";
import Groups from "./pages/Groups";
import Contacts from "./pages/Contacts";
import Messages from "./pages/Messages";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./utils/ThemeContext";
import { UserProvider } from "./utils/UserContext";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <UserProvider>
          <InnerApp />
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const InnerApp = () => {
  const location = useLocation();

  // List of paths where Sidebar and Chatbox should be hidden
  const noSidebarAndChatboxPaths = ["/signin", "/signup"];

  // Check if the current path is in the list of paths to hide Sidebar and Chatbox
  const shouldHideSidebarAndChatbox = (path) => {
    return noSidebarAndChatboxPaths.includes(path) || ![
      "/",
      "/settings",
      "/groups",
      "/contacts",
      "/messages"
    ].includes(path);
  };

  return (
    <div className="App">
      {!shouldHideSidebarAndChatbox(location.pathname) && <Sidebar />}
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="*" element={<NotFound />} /> {/* Handle invalid paths */}
      </Routes>
      {!shouldHideSidebarAndChatbox(location.pathname) && <Chatbox />}
    </div>
  );
};

export default App;
