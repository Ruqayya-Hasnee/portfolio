import "./App.css";
import About from "./Components/About";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="absolute w-screen">
        <Navbar />
      </div>
      <div className="min-h-screen">
        <div className="absolute">
          <Main />
        </div>
        <div className="relative">
          <About />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
