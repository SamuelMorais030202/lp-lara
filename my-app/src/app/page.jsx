import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Call from "@/components/Call";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import History from "@/components/History";

export default function Home() {
  return (
    <section>
      <Header />
      <History />
      <Call />
      <Benefits />
      <About />
      <Footer />
    </section>
  )
}