import { Hero } from "@/components/hero";
import { Menu } from "@/components/menu";
import { Header } from "@/components/header";
import { Reservation } from "@/components/reservation";

const Home = () => {
  return (
    <div className="w-full max-w-360 mx-auto bg-white overflow-hidden">
      <Header />
      <Hero />
      <Menu />
      <Reservation />
    </div>
  );
};

export default Home;
