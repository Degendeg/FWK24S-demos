import { useState, useEffect } from 'react'
import CookieConsent, { Cookies, getCookieConsentValue, resetCookieConsentValue } from 'react-cookie-consent'
import { ReactTyped } from 'react-typed'
import './App.css'

function App() {
  const [consent, setConsent] = useState(false)

  useEffect(() => {
    setConsent(getCookieConsentValue("cookie_consent") === "true")
  }, [])

  const handleAcceptCookies = () => {
    Cookies.set("cookie_consent", "true", { expires: 150 })
    setConsent(true)
  }

  const handleWithdrawConsent = () => {
    resetCookieConsentValue("cookie_consent")
    setConsent(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>GDPR & Cookie Consent Demo</h1>
        <p>
          <ReactTyped strings={["Välkommen till vår webbplats. Vi värnar om din integritet och följer GDPR (General Data Protection Regulation) riktlinjerna."]} typeSpeed={40} />
        </p>
        <section className="gdpr-info">
          <h2>GDPR och Webbutveckling</h2>
          <p>
            GDPR är en förordning som syftar till att skydda individers personuppgifter inom EU. För utvecklare innebär detta att man måste vara transparent med hur man samlar in, använder och lagrar användardata. Användare måste också ges möjlighet att samtycka till datainsamling och ha rätt att dra tillbaka sitt samtycke när som helst.
          </p>
        </section>
        {consent && (
          <button onClick={handleWithdrawConsent}>Dra tillbaka samtycke</button>
        )}
      </header>

      {!consent && (
        <CookieConsent
          location="bottom"
          buttonText="Jag förstår"
          cookieName="cookie_consent"
          className="cookie-banner"
          buttonClassName="cookie-accept-btn"
          expires={150}
          onAccept={handleAcceptCookies}
          enableDeclineButton
          declineButtonText="Bara nödvändiga"
        >
          Vi använder cookies för att förbättra din upplevelse på vår webbplats. Genom att fortsätta använda webbplatsen godkänner du vår användning av cookies. Läs mer om vår{' '}<a href="/integritetspolicy.pdf" target="_blank" className='cookie-policy-link'>integritetspolicy</a>.
        </CookieConsent>
      )}
    </div>
  )
}

export default App
