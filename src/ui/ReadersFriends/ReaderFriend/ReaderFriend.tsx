import userLogo from "../../../assets/userLogo.jpg";
import React from "react";

const ReaderFriend: React.FC = () => {
  return (
    <section className="grid gap-6 ">
      <div className="flex items-center gap-[16px]">
        <img
          src={userLogo}
          alt="User Logo"
          className="rounded-[100px] w-[42px] h-[42px]"
        />
        <p className="font-semibold">Olena Hrynko</p>
      </div>
      <p>
        Wow. Just... wow. &ldquo;A Good Girl&lsquo;s Guide to Murder&ldquo; by
        Holly Jackson completely sucked me in from the very first page, and it
        refused to let me go until the very end. If you&lsquo;re looking for a
        gripping, perfectly paced, and incredibly clever mystery that will keep
        you guessing, this is absolutely it.
      </p>
      <span className="font-semibold text-[#FF4F5B]">
        A Good Girl&lsquo;s Guide to Murder
      </span>
    </section>
  );
};

export default ReaderFriend;
