import React from "react";
import WhatReadImg from "../assets/giphy.gif";
import Button from "../kit/Button";
const WhatToReadPage = () => {
  return (
    <section className="px-8 text-center  mt-24 flex flex-col text-4xl font-semibold items-center justify-center">
      <span className="block mb-3">Hmmm...</span>
      <h2>Don`t know what to read? Use magic box for it!</h2>
      <figure className="aspect-square mb-10 mt-12">
        <img src={WhatReadImg} alt="Which Book to read" />
      </figure>
      <Button
        buttonText="Spin Books"
        className="bg-accent text-background text-2xl"
      />
    </section>
  );
};

export default WhatToReadPage;
