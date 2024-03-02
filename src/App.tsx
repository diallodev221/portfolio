import "./App.css";

import NavBar from "./components/NavBar";
import Header from "./components/header/Header";
import Skill from "./components/skills/Skill";
import Work from "./components/work/Work";
import Project from "./components/project/Project";

function App() {
  return (
    <>
      <NavBar />
      <main className="px-[13px] sm:px-[20px] lg:px-[24px]">
        <Header />
        <Skill />
        <Work />
        <Project />
      </main>
    </>
  );
}

export default App;
