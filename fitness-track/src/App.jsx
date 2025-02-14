import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
function App() {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const NAVBAR_ITEMS = [
    { icon: "🏠", text: "DashBoard", component: <HomePage /> },
    { icon: "🏋️‍♂️", text: "Workout plan", component: <AboutPage /> },
    { icon: "🥪", text: "Diet plan", component: <SearchPage /> },
    { icon: "🙎‍♂️", text: "Profile", component: <ProfilePage /> },
  ];

  const activePage = NAVBAR_ITEMS[activePageIndex].component;

  return (
    <div className="app">
      <NavBar ITEMS={NAVBAR_ITEMS} setActivePageIndex={setActivePageIndex} />
      <div className="main-container">
        {activePage}
      </div>
    </div>
  );
}

export default App;
