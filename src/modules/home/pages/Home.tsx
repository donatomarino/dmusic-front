import { useContext, useEffect, useState } from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import { ComponentContext } from "../../../context/ComponentContext";
import Explore from "../components/Explore";
import Search from "../components/Search";
import { Library } from "../components/Library";

const Home = () => {
  const { component, toggleComponent } = useContext(ComponentContext);
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    localStorage.getItem('token') ? setAuth(true) : setAuth(false);
    toggleComponent(2);
  }, [])

  return (
  <div className="grid h-screen w-screen grid-cols-5 grid-rows-[auto_1fr_auto] overflow-hidden">
    <Header auth={auth}/>
    <SideMenu auth={auth}/>
    <main className="col-span-4 overflow-y-auto min-h-0 bg-bg-cards">
      {component === 1 && <Content />}
      {component === 2 && <Explore auth={auth} />}
      {component === 3 && <Search auth={auth} />}
      {component === 4 && <Library />}
    </main>
    <Footer />
  </div>
);

}

export default Home;