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
import { CircleIndicator } from "./widgets/CircleIndicator";

function App() {
  return (
    <div className="">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div
        id="about"
        className="mx-auto   bg-blue-100 w-full flex justify-center items center "
      >
        <Introduction />
      </div>
      <div id="counter">
        <Counter />
      </div>
      {/* <div className="mx-auto   bg-blue-100 w-full flex justify-center items center ">
        <Research />
      </div> */}
      <div id="importantdates" className="flex justify-center">
        <ImportantDates />
      </div>
      <div
        id="commite"
        className="mx-auto   bg-primaryLight  w-full flex justify-center items center "
      >
        <Members />
      </div>
      <div
        id="paper"
        className="mx-auto   bg-blue-100 w-full flex justify-center items center "
      >
        <FeeAndPaper />
      </div>
      <div id="honours" className="flex justify-center">
        <GuestandHonors />
      </div>

      <div className="mx-auto   bg-blue-100 w-full flex justify-center items center ">
        <Conference />
      </div>
      <div id="location" className="mx-auto   w-full flex justify-center ">
        <Location />
      </div>
      <Footer />
      <div
        style={{
          position: "fixed",
          bottom: "0",
          right: "20px",
          zIndex: 1000,
          marginBottom: "80px",
        }}
      >
        <CircleIndicator />
      </div>
    </div>
  );
}

export default App;
