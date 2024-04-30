import Benefits from "@/components/Benefits";
import Call from "@/components/Call";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import History from "@/components/History";
import Infos from "@/components/Infos";

export default function Home() {
  return (
    <section>
      <Infos />
      <Header />
      <History />
      <Call />
      <Benefits />
      <Footer />
    </section>
  )
}