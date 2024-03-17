import Counter from "./components/Counter";
import FeeAndPaper from "./components/FeeAndPaper";
import GuestandHonors from "./components/GuestandHonors";
import Hero from "./components/Hero";
import ImportantDates from "./components/ImportantDates";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Research from "./components/Research";

function App() {
  return (
    <div className="text-gray-800">
      <Navbar />

      <Hero />
      <div className="mx-auto   bg-blue-100 w-full flex justify-center items center ">
        <Introduction />
      </div>
      <Counter />
      <div className="mx-auto   bg-blue-100 w-full flex justify-center items center ">
        <Research />
      </div>
      <div className="flex justify-center">
        <ImportantDates />
      </div>
      <div className="mx-auto   bg-blue-100 w-full flex justify-center items center ">
        <FeeAndPaper />
      </div>
      <div className="flex justify-center">
        <GuestandHonors />
      </div>
    </div>
  );
}

export default App;
