import React from "react";
import Button from "../kit/Button";
import Icon from "../kit/Icon";
import NotFoundImg from "../assets/404.png";
const NotFoundPage: React.FC = () => {
  return (
    <section className="grid grid-cols-[1fr_2fr] place-items-center gap-6 max-w-7xl m-auto h-screen">
      <div>
        <h2 className="text-[48px] ">
          <span className="block font-bold">Ooops...</span>Page not found
        </h2>
        <p className="text-[18px] mt-7">
          We&lsquo;re sorry, the page you requested could not be found.
          It&lsquo;s possible you mistyped the address or the page has been
          moved.
        </p>
        <Button
          type="primary"
          className="bg-accent text-background py-3 mt-12 "
        >
          Go Back
          <Icon
            name="arrow-long-right"
            width={18}
            height={18}
            className="ml-2"
          />
        </Button>
      </div>
      <figure>
        <img src={NotFoundImg} alt="Not Found" />
      </figure>
    </section>
  );
};

export default NotFoundPage;
