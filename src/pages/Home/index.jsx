import Nav from "../../components/Nav";
import SobreNos from "../Home/SobreNos";
import Landing from "../Home/Landing";
import OCollaborate from "../Home/OCollaborate";
import Entrar from "./Entrar";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
    <main className="p-10">
      <header>
        <Nav />
      </header>
      <Landing />
      <OCollaborate />
    </main>
      <SobreNos />
      <Entrar/>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Home;
