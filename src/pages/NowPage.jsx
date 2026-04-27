import './NowPage.css'
import { nowPageLastUpdated } from '../generated/nowPageLastUpdated'

function NowPage() {
  return (
    <div className="now-page">
      <section className="now-content">
        <h1 className="now-title">what i&apos;m doing now</h1>
        <p className="now-updated">last updated: {nowPageLastUpdated}</p>
        
        <div className="now-section">
          <h2>goals</h2>
          <ul>
            <li>want to find a casiopea vinyl by myself in a store <em>somewhere</em></li>
            <li>downsizing the items i own</li>
            <li>trying to place highly at a one piece card game tournament (current record is 70/1024!)</li>
          </ul>
        </div>

        <div className="now-section">
          <h2>currently</h2>
          <p>
            enjoying playing the social deduction game <a href="https://bloodontheclocktower.com" target="_blank" rel="noopener noreferrer">blood on the clocktower</a>
          </p>
        </div>

        <div className="now-section">
          <h2>living</h2>
          <p>
            in downtown toronto with my girlfriend, if you&apos;re nearby, hit me up for a chat!
          </p>
        </div>

        <div className="now-section">
          <h2>trying</h2>
          <p>
            to write - hopefully by writing this i&apos;m guilt tripping myself publically
          </p>
        </div>

        <div className="now-section">
          <h2>working</h2>
          <p>
            currently at ripple labs, working on the payments team, and learning about the crypto ecosystem!
          </p>
        </div>

        <p className="now-note">
          <em>
            this is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">now page</a>.
            if you have your own site, you should make one, too.
          </em>
        </p>
      </section>
    </div>
  )
}

export default NowPage

