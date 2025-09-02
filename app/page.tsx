import { Map } from "@/components/map";
import { Hero } from "@/components/hero";
import { Menu } from "@/components/menu";
import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reservation } from "@/components/reservation";

const Home = () => {
  return (
    <div className="w-full max-w-360 mx-auto bg-white overflow-hidden">
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <About />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
