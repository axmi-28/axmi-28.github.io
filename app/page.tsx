'use client';

import { useEffect, useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const directions = [
  { id: 'plain', number: '01', name: 'Plain', description: 'A familiar corner of the internet. Just words, links, and space.' },
  { id: 'margin', number: '02', name: 'Margin', description: 'A little more editorial. Serif type, side notes, and a single red asterisk.' },
  { id: 'index', number: '03', name: 'Index', description: 'An orderly list of things. Monospace details and a small blue accent.' },
  { id: 'letter', number: '04', name: 'Letter', description: 'A personal note. An easy reading rhythm, with the links woven in.' },
] as const;
type Direction = typeof directions[number]['id'];

const projects = [
  { title: 'A small useful tool', description: 'Making an everyday task a little easier.', year: '2026', detail: 'This is where a few sentences about the project would go: what you made, why it mattered, and what you learned along the way.' },
  { title: 'An ongoing experiment', description: 'Following a question to see where it leads.', year: '2025', detail: 'A place for work in progress. Add the question you are exploring, an early observation, or a link to try it out.' },
  { title: 'A weekend project', description: 'Something made for the fun of making it.', year: '2025', detail: 'Not everything needs to be a big undertaking. This space can hold a small experiment, a collaboration, or a thing you made just because.' },
];
const notes = [
  { title: 'Notes on making things', description: 'A few observations from the process.', year: '2026', detail: 'Your writing would live here. A short thought, a longer essay, or a record of something you wanted to understand.' },
  { title: 'Things I changed my mind about', description: 'Leaving room for a different answer.', year: '2025', detail: 'Another sample entry. Replace this with a note about an idea, a book, or an experience that stayed with you.' },
];

function Entries({ items, kind = 'projects' }: { items: typeof projects; kind?: string }) {
  return <div className={`entries entries-${kind}`}>
    {items.map((item, i) => <details className="entry" key={item.title}>
      <summary>
        <span className="entry-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
        <span className="entry-body"><span className="entry-title">{item.title}</span><span className="entry-description">{item.description}</span></span>
        <span className="entry-year">{item.year}</span><span className="entry-arrow" aria-hidden="true">↗</span>
      </summary>
      <div className="entry-detail"><span className="sample-label">Sample {kind === 'notes' ? 'note' : 'project'}</span><p>{item.detail}</p></div>
    </details>)}
  </div>;
}
function Contact() {
  return <a className="email" href="mailto:hello@example.com">hello@example.com<span aria-hidden="true"> ↗</span></a>;
}
function Plain() {
  return <article className="personal-page plain-page">
    <nav className="page-nav" aria-label="Page sections"><a href="#plain-home" aria-current="page">home</a><a href="#plain-projects">projects</a><a href="#plain-notes">notes</a></nav>
    <header id="plain-home" className="intro">
      <h1>hi, i’m your name.</h1>
      <p>I build things, follow my curiosity, and write from time to time.</p>
      <p>Currently working on something new in [your city].<br />You can reach me at <Contact />.</p>
    </header>
    <section id="plain-projects"><h2>a few things i’ve made</h2><Entries items={projects} /></section>
    <section id="plain-notes"><h2>some notes</h2><Entries items={notes} kind="notes" /></section>
    <section className="aside-section"><h2>away from the screen</h2><p>Long walks, dog-eared books, and finding a good place for coffee.</p></section>
    <footer>Always a work in progress.<span className="tiny-flower" aria-hidden="true">✳</span></footer>
  </article>;
}
function Margin() {
  return <article className="personal-page margin-page">
    <header className="margin-heading"><h1>Your Name<span aria-hidden="true">*</span></h1><span className="margin-colophon">A personal page<br />[Your city], 2026</span></header>
    <section className="margin-section"><h2><span>01</span> An introduction</h2><div className="margin-intro"><p>I build things, follow my curiosity, and write from time to time.</p><p className="secondary-copy">Currently working on something new. Usually learning as I go.</p></div></section>
    <section className="margin-section"><h2><span>02</span> Selected work</h2><Entries items={projects} /></section>
    <section className="margin-section"><h2><span>03</span> In the margins</h2><Entries items={notes} kind="notes" /></section>
    <section className="margin-section margin-contact"><h2><span>04</span> Elsewhere</h2><div><p>Long walks, dog-eared books, and finding a good place for coffee.</p><Contact /></div></section>
    <footer><span><b aria-hidden="true">*</b> Always a work in progress.</span><span>Say hello sometime.</span></footer>
  </article>;
}
function Index() {
  return <article className="personal-page index-page">
    <header className="index-heading"><h1>Your Name<span aria-hidden="true">_</span></h1><span>Personal index / 2026</span></header>
    <div className="index-intro"><p>I build things, follow my curiosity,<br className="desktop-break" /> and write from time to time.</p><p className="index-location">Currently: something new.<br />Based in: [your city].</p></div>
    <section><div className="index-label"><h2>Projects</h2><span>Year</span></div><Entries items={projects} /></section>
    <section><div className="index-label"><h2>Notes</h2><span>Year</span></div><Entries items={notes} kind="notes" /></section>
    <section className="index-personal"><h2>Off-screen</h2><p>Long walks, dog-eared books,<br />a good place for coffee.</p></section>
    <footer><Contact /><span>End of index <span aria-hidden="true">↙</span></span></footer>
  </article>;
}
function Letter() {
  return <article className="personal-page letter-page">
    <header className="letter-heading"><span>Your Name</span><span>[Your city]</span></header>
    <h1>Hello, stranger.</h1>
    <div className="letter-prose"><p>I’m Your Name. I build things, follow my curiosity, and write from time to time.</p><p>This is a little place to keep what I’m working on and what I’m thinking about. Currently, that means working on something new and learning as I go.</p></div>
    <section><h2>A few things I’ve made</h2><Entries items={projects} /></section>
    <section><h2>And a couple of notes</h2><Entries items={notes} kind="notes" /></section>
    <div className="letter-prose closing"><p>Away from the screen, you’ll usually find me on a long walk, with a dog-eared book, or looking for a good place for coffee.</p><p>If something here resonates, <a href="mailto:hello@example.com">say hello</a>.</p></div>
    <footer><p>Until next time,</p><span className="signature">Your Name</span><span className="postscript">P.S. Always a work in progress.</span></footer>
  </article>;
}

export default function Home() {
  const [direction, setDirection] = useState<Direction>('plain');
  useEffect(() => {
    const sync = () => {
      const value = new URLSearchParams(window.location.search).get('design');
      setDirection(directions.find((item) => item.id === value)?.id ?? 'plain');
    };
    sync();
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);
  function changeDirection(value: unknown) {
    const next = directions.find((item) => item.id === value);
    if (!next) return;
    setDirection(next.id);
    const url = new URL(window.location.href);
    url.searchParams.set('design', next.id);
    url.hash = '';
    window.history.pushState(null, '', url);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  const selected = directions.find((item) => item.id === direction)!;
  return <Tabs value={direction} onValueChange={changeDirection} className={`study study-${direction}`}>
    <a className="skip-link" href="#design-preview">Skip to design</a>
    <header className="study-toolbar">
      <div className="study-brand">Personal website<span>Four design studies</span></div>
      <TabsList aria-label="Choose a design direction" variant="line" className="study-tabs">
        {directions.map((item) => <TabsTrigger key={item.id} value={item.id} className="study-tab"><span>{item.number}</span> {item.name}</TabsTrigger>)}
      </TabsList>
      <span className="placeholder-notice">All content is placeholder</span>
    </header>
    <main id="design-preview" className="design-preview">
      <div className="study-caption"><span>{selected.number} / {selected.name}</span><p>{selected.description}</p></div>
      <TabsContent value="plain"><Plain /></TabsContent>
      <TabsContent value="margin"><Margin /></TabsContent>
      <TabsContent value="index"><Index /></TabsContent>
      <TabsContent value="letter"><Letter /></TabsContent>
    </main>
    <div className="study-bottom"><span>Design study {selected.number} of 04</span><span>All content is placeholder. Compare the tabs above.</span></div>
  </Tabs>;
}
