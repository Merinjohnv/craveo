import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import SignatureMenu from "./components/SignatureMenu";
import Experience from "./components/Experience";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";

function App() {
  return (
    <main className="bg-[#f4f0e8] text-[#211c17]">
      <Navbar />
      <Hero />
      <Philosophy />
      <SignatureMenu />
      <Experience />
      <Story />
      <Gallery />
      <Visit />
      <Feedback />
      <Footer />
    </main>
  );
}

export default App;