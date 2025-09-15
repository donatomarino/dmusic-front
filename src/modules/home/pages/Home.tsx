import Header from "../components/Header";

const Home = () => {
  return (
    <div className="grid min-h-screen min-w-screen grid-cols-3 grid-rows-[auto_1fr_auto]">
      <Header />
      <aside className="bg-blue-800 col-span-1 row-span-2">Sidebar</aside>
      <main className="bg-green-400 col-span-2">Main content</main>
      <footer className="bg-red-400 col-span-2">Footer</footer>
    </div>
  )
}

export default Home;