import { useContext } from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import { ComponentContext } from "../../../context/ComponentContext";
import Explore  from "../components/Explore";

const Home = () => {
  const {component} = useContext(ComponentContext);
  return (
    <div className="grid min-h-screen min-w-screen grid-cols-5 grid-rows-[auto_1fr_auto]">
      <Header />
      <SideMenu />
      <main className="col-span-4">
        {component === 1 && <Content />}
        {component === 2 && <Explore />}
      </main>
      <Footer />
    </div>
  )
}

export default Home;