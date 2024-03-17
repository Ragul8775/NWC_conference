import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const RollNo = ({ number }) => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <h1 className="text-6xl">
          {counterOn && (
            <CountUp start={0} end={number} duration={2} delay={0} />
          )}
        </h1>
      </ScrollTrigger>
    </div>
  );
};

export default RollNo;
