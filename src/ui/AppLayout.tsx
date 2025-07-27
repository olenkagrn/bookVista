import { Outlet, useNavigation } from "react-router-dom";
import React, { useState } from "react";
import SideMenu from "./SideMenu";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Loader from "./Loader/Loader";
function AppLayout() {
  const [isSideMenuHovered, setIsSideMenuHovered] = useState(false);

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log("Navigation state:", navigation.state);

  return (
    <div className=" min-h-screen font-sans text-[#2A2A2A] bg-[#dcdcdc]">
      {isLoading && <Loader />}

      {isSideMenuHovered && (
        <div className="fixed inset-0 bg-black opacity-30 z-40"></div>
      )}
      <section className="flex flex-col min-h-screen pt-12 md:grid md:p-0 md:grid-cols-[auto_1fr] md:grid-rows-[auto_1fr_auto] gap-6 relative max-w-[1440px] m-auto bg-[#F1EFE3] md:pr-16">
        <aside className="hidden md:block md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 md:h-full">
          <SideMenu onMenuHoverChange={setIsSideMenuHovered} />
        </aside>
        <BurgerMenu />
        <Header />

        <main className="md:col-start-2 md:col-end-5 md:row-start-2 md:row-end-3 p-4 md:p-0">
          <Outlet />
        </main>

        <Footer />
      </section>
    </div>
  );
}
export default AppLayout;
