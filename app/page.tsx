export default function Home() {
  return (
    <main className="personal-page" id="home">
      <nav className="page-nav" aria-label="Page sections">
        <a href="#home">home</a>
        <a href="#experiences">experiences</a>
        <a href="#open-source">open source</a>
      </nav>

      <header className="intro">
        <h1>hi, im Andy</h1>
        <p>
          hoping to make some positive impact in the world, and looking forward
          to improving my epistemics
        </p>
        <p>
          currently working on interpretability, interested in eval awareness
          and model diffing
        </p>
        <p>
          cautious as to prosaic alignment feasibility and potential
          net-negative interpretability work
        </p>
        <p>also interested in agent foundations</p>
        <p>i am a high schooler</p>
      </header>

      <section id="experiences" aria-labelledby="experiences-heading">
        <h2 id="experiences-heading">Experiences</h2>
        <div className="experience">
          <div className="experience-heading">
            <h3>Algoverse Research</h3>
            <p className="dates">June 2026 - Sept 2026</p>
          </div>
          <p>
            Worked with Melwina Albuquerque on investigating steering with
            J-lens directions
          </p>
        </div>
        <div className="experience">
          <div className="experience-heading">
            <h3>Spar Fellow</h3>
            <p className="dates">Sept 2026 - Ongoing</p>
          </div>
          <p>
            Working with Stepan Shabalin on model diffing and conditional
            behaviors
          </p>
        </div>
      </section>

      <section id="open-source" aria-labelledby="open-source-heading">
        <h2 id="open-source-heading">Open source work</h2>
        <ul>
          <li>
            Contributed a self-trained NLA and several J-lenses to Neuronpedia
          </li>
          <li>
            In the works for EPDashboard: feature visualization tool similar to
            SAEDashboard
          </li>
        </ul>
      </section>

      <footer className="contact">
        <a href="mailto:andy919319@gmail.com">andy919319@gmail.com</a>
        <a href="https://github.com/axmi-28">github / axmi-28</a>
      </footer>
    </main>
  );
}
