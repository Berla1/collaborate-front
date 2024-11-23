import Nav from "../../components/Nav";
import SobreNos from "../../components/SobreNos";
import Landing from "../../components/Landing";
import OCollaborate from "../../components/OCollaborate";

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
    </>
  );
};

export default Home;
