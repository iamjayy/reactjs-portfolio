import "./App.css";
import { NavBar } from "./components/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/banner/Banner";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
