import React from "react";
import ReaderFriend from "./ReaderFriend/ReaderFriend";
const ReadersFriends: React.FC = () => {
  return (
    <>
      <section className="md:col-start-4 md:col-end-5 md:row-start-4 md:row-end-6 self-start text-[#2A2A2A] flex flex-col  justify-center gap-[42px] border-l border-[#FF4F5B] border-dashed  mt-4 pl-6">
        <h2 className="text-[24px] font-bold ">Readers Friends</h2>
        <ReaderFriend />
        <ReaderFriend />
      </section>
    </>
  );
};
export default ReadersFriends;
