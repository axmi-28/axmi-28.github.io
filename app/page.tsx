export default function Home() {
  return (
    <main className="personal-page" id="home">
      <nav className="page-nav" aria-label="Page sections">
        <a href="#home">home</a>
      </nav>

      <header className="intro">
        <h1>hi, im Andy</h1>
        <p>
          hoping to make some positive impact in the world, and looking forward
          to improving my epistemics
        </p>
        <p>
          currently working on interpretability, interested in eval awareness
          and model diffing (although cautious as to the feasibility of prosaic
          alignment and potentially net-negative interp)
        </p>
        <p>also interested in agent foundations</p>
        <p>i am currently in high schooler</p>
      </header>

      <section id="past-work" aria-labelledby="past-work-heading">
        <h2 id="past-work-heading">Past work</h2>
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
            Researching model diffing and conditional behaviors with Stepan
            Shabalin
          </p>
        </div>
      </section>

      <section id="open-source" aria-labelledby="open-source-heading">
        <h2 id="open-source-heading">Open-source interpretability tooling</h2>
        <ul>
          <li>
            Contributions include NLAs and J-lenses on{' '}
            <a href="https://www.neuronpedia.org/qwen2.5-1.5b-it/nla">
              Neuronpedia
            </a>
          </li>
          <li>
            In the works for EPDashboard, feature visualization tool similar to
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
