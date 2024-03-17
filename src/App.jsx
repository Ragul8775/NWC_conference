import Conference from "./components/Conference";
import Counter from "./components/Counter";
import FeeAndPaper from "./components/FeeAndPaper";
import Footer from "./components/Footer";
import GuestandHonors from "./components/GuestandHonors";
import Hero from "./components/Hero";
import ImportantDates from "./components/ImportantDates";
import Introduction from "./components/Introduction";
import Location from "./components/Location";
import Members from "./components/Members";
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
      <div className="mx-auto   bg-blue-900  w-full flex justify-center items center ">
        <Members />
      </div>
      <div className="mx-auto   bg-blue-100 w-full flex justify-center items center ">
        <Conference />
      </div>
      <div className="mx-auto   w-full flex justify-center ">
        <Location />
      </div>
      <Footer />
    </div>
  );
}

export default App;
