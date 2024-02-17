import { Navbar } from "@/Components/Navbar";
import "@/Styles/page.css";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="page">
      <section id="top-walls">
        <h1>LIT🔥WALLPAPERS</h1>
        <button>SHOW ALL</button>
      </section>
      <section id="categories">
        <h1>CATEGORIES</h1>
      </section>
      <section id="mobile">
        <h1>MOBILE</h1>
        <button>SHOW ALL</button>
      </section>
      <section id="desktop">
        <h1>DESKTOP</h1>
        <button>SHOW ALL</button>
      </section>
      <section id="about">
        <h1>ABOUT</h1>
      </section>
    </div>
    </>
  );
}
