"use client";

import React, { useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CountUpHome = ({ fact }: { fact: { number: number; title: string } }) => {
  const { ref: refCountUp, inView, entry } = useInView();

  return (
    <div ref={refCountUp} className="w-full h-10">
      {inView && (
        <CountUp start={0} end={fact.number} duration={2.5} decimal="," />
      )}
    </div>
  );
};

export default CountUpHome;
