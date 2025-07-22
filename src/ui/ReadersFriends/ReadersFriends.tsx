import React from "react";
import ReaderFriend from "./ReaderFriend/ReaderFriend";
const ReadersFriends: React.FC = () => {
  return (
    <>
      <section className="text-[#2A2A2A] flex flex-col  justify-center gap-[42px] border-l border-[#FF4F5B] border-dashed  p-6 md:pl-6">
        <h2 className="text-3xl font-bold ">Readers Friends</h2>
        <ReaderFriend />
        <ReaderFriend />
      </section>
    </>
  );
};
export default ReadersFriends;
