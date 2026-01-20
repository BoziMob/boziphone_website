import FeatureList from './components/FeatureList'
import Footer from './components/Footer'
import Hero from './components/Hero'
import InfoSection from './components/InfoSection'
import Nav from './components/Nav'

function App() {
  return (
    <div className="min-h-screen bg-[color:var(--color-surface)] text-[color:var(--color-ink)]">
      <div className="sticky top-0 z-20 border-b border-[color:var(--color-border)] bg-[color:var(--color-surface-80)] backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Nav />
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 py-10 sm:gap-16 sm:py-12">
        <Hero />
        <div className="h-48 w-full rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)] sm:h-64" />
        <InfoSection
          title="Reduser stress i hverdagen"
          body="BoziPhone er en telefon designet for å redusere skjermbruk, ved å kun ha tjenestene du faktisk trenger. Se hvordan BoziPhone kan hjelpe deg."
          buttonLabel="Lær mer"
          imageClassName="border border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)]"
          imageSizeClassName="h-44 sm:h-64"
        />
        <InfoSection
          title="Open source teknologi"
          body="Vi er for en mer åpen verden. Derfor er BoziPhone open source."
          buttonLabel="Om open source"
          imageClassName="border border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)]"
          imageSizeClassName="h-44 sm:h-64"
          reverse
        />
        <FeatureList />
        <Footer />
      </div>
    </div>
  )
}

export default App
