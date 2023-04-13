import React from "react";

const Headline = ({ text }) => {
  return (
    <div>
      <section className="w-full relative flex content-center overflow-hidden border-b border-t  font-monument_bold text-lg py-2">
        {/* <marquee> */}
        <div className="flex">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="m-2 mx-5 w-fit whitespace-nowrap">
                {text}
              </div>
            ))}
        </div>
        {/* </marquee> */}
      </section>
    </div>
  );
};

export default Headline;
