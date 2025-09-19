import Footer from "../components/Footer";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";

const Home = () => {
  return (
    <div className="grid min-h-screen min-w-screen grid-cols-5 grid-rows-[auto_1fr_auto]">
      <Header />
      <SideMenu />
      <main className="bg-green-400 col-span-4">Main content</main>
      <Footer />
    </div>
  )
}

export default Home;