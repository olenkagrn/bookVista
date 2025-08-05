import { Outlet, useNavigation } from "react-router-dom";
import { useState } from "react";
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
    <div className="font-display min-h-screen text-dark-default bg-[#dcdcdc]">
      {isLoading && <Loader />}

      {isSideMenuHovered && (
        <div className="fixed inset-0 bg-dark-default opacity-30 z-40"></div>
      )}
      <section className="flex flex-col min-h-screen pt-12 lg:grid lg:p-0 lg:grid-cols-[min-content_1fr] lg:grid-rows-[auto_1fr_auto] relative  m-auto bg-background ">
        <aside className="hidden lg:block lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-4 lg:h-full w-fit">
          <SideMenu onMenuHoverChange={setIsSideMenuHovered} />
        </aside>
        <BurgerMenu />
        <Header />

        <main className="lg:col-start-2 px-8 lg:px-0 lg:col-end-5 lg:row-start-2 lg:row-end-3  lg:p-0 lg:mb-24 max-w-[1400px] m-auto h-full">
          <Outlet />
        </main>

        <Footer />
      </section>
    </div>
  );
}
export default AppLayout;
