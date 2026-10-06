import homeBg from '../images/home.jpg'
import './Home.css'

const PERKS = ['Chrono checked replicas', 'Nationwide shipping', 'Upgrades and repairs', 'Field ready gear']

export default function Home() {
  return (
    <section className="home" id="home" style={{ backgroundImage: `url("${homeBg}")` }}>
      <div className="home-shade" />
      <div className="home-body">
        <p className="dealer">Airsoft shop in the Philippines</p>
        <h1>
          Aim.
          <em>Dominate.</em>
          Repeat.
        </h1>
        <p className="lead">Your go to airsoft shop for AEGs, snipers, shotguns, gear and upgrades. Built for the field and ready for game day.</p>
        <div className="home-cta">
          <a className="btn" href="#shop">Shop replicas</a>
          <a className="btn ghost" href="#catalog">Browse catalog</a>
        </div>
      </div>
      <ul className="perks">
        {PERKS.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </section>
  )
}
