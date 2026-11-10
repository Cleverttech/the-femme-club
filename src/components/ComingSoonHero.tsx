
const CONTACT_EMAIL = 'thefemmeclub.cy@gmail.com';

export default function ComingSoonHero() {
  return (
    <main className="page-shell" id="main">
      <header className="site-header" aria-label="Site header">
        <a className="wordmark" href="#main" aria-label="The Femme Club home">
          THE FEMME CLUB
          <span className="wordmark-dot" aria-hidden="true">✦</span>
        </a>

        {/* Logo in the top-right corner */}
        <a
          className="header-logo-link"
          href="#main"
          aria-label="The Femme Club home"
        >
          <img
            className="header-logo"
            src="/femme-club-logo.png"
            alt="The Femme Club"
            width="64"
            height="64"
          />
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            OUR NEW DIGITAL HOME
          </span>

          <h1 id="hero-title">
            Something<br />
            <em>beautiful</em><br />
            is coming.
          </h1>

          <p className="lead">A space to move, connect and belong.</p>

          <p className="description">
            The Femme Club brings women together through dance,
            events and beautiful shared experiences.
            A new chapter is on its way.
          </p>

          <div className="hero-actions">
            <a
              className="contact-button"
              href={`mailto:${CONTACT_EMAIL}?subject=Hello%20The%20Femme%20Club`}
            >
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>

          <p className="microcopy">
            GIRLHOOD <span>·</span> DANCE <span>·</span> EVENTS
            <span>·</span> COMMUNITY
          </p>
        </div>

        <div className="hero-visual" aria-label="The Femme Club branding">
          <div className="visual-border" aria-hidden="true" />
          <div className="visual-glow" aria-hidden="true" />

          <div className="visual-content">
            <span className="visual-overline">
              WELCOME TO YOUR NEXT CHAPTER
            </span>

            <img
              className="brand-logo"
              src="/femme-club-logo.png"
              alt="The Femme Club original logo"
              width="440"
              height="440"
            />

            <span className="visual-under">
              A LITTLE HOME AWAY FROM HOME
            </span>
          </div>

          <span
            className="visual-corner visual-corner-top"
            aria-hidden="true"
          >
            01 / 01
          </span>

          <span
            className="visual-corner visual-corner-bottom"
            aria-hidden="true"
          >
            EST. IN COMMUNITY
          </span>
        </div>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} THE FEMME CLUB</span>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        <span>
          MADE FOR CONNECTION <span aria-hidden="true">♡</span>
        </span>
      </footer>
    </main>
  );
}
