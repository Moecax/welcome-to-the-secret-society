import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className=" container mx-auto px-6 pt-16 flex-1 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
          Welcome to
        </h2>

        <h1 className="text-3xl md:text-6xl lg:text-8xl font-black uppercase mb-8">
          The Secret Society
        </h1>

        <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4  md:px-10 lg:py-6 lg:px-12 bg-white">
          45,684
        </div>
      </main>
      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <p>Built With GUSTO!!</p>
        <div className="flex -mx-6">
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            About US |
          </a>
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            Contact US |
          </a>
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
