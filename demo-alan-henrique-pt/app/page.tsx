import {
  ConceptBanner,
  Header,
  Hero,
  About,
  Service,
  FAQ,
  Contact,
  Footer,
} from "./components";

export default function Home() {
  return (
    <>
      <ConceptBanner />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Service />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
