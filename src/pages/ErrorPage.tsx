import React from "react";
import ErrorImg from "../assets/error.png";
import Button from "../kit/Button";

const ErrorPage = () => {
  return (
    <section className="flex flex-col gap-6 items-center justify-center h-lvh">
      <img src={ErrorImg} alt="Error Image" />
      <h2 className="font-semibold text-dark-default text-6xl">
        Opps! Something Went Wrong
      </h2>
      <p className="font-extralight text-2xl text-border">
        You didn’t break the internet, but we can’t find what are you looking
        for.
      </p>
      <Button
        buttonText="Try again"
        className="text-background border-0 bg-accent px-8 "
      />
    </section>
  );
};

export default ErrorPage;
