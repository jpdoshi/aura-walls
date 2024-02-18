import { Navbar } from "@/Components/Navbar";
import "@/Styles/page.css";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="page">
      <section id="lit-walls">
        <h1>LIT🔥WALLPAPERS</h1>
        <a href="/walls">
          <button>SHOW ALL</button>
        </a>
      </section>
      <section id="tags">
        <h1>TAGS</h1>
      </section>
      <section id="mobile">
        <h1>MOBILE</h1>
        <a href="/walls?o=portrait">
          <button>SHOW ALL</button>
        </a>
      </section>
      <section id="desktop">
        <h1>DESKTOP</h1>
        <a href="/walls?o=landscape">
          <button>SHOW ALL</button>
        </a>
      </section>
      <section id="about">
        <h1>ABOUT</h1>
      </section>
    </div>
    </>
  );
}
