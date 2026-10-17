import NavBar from "../Component/NavBar"

function Hero({ player }) {
  return (
    <div className="hero">
      <h1>{player}</h1>
    </div>
  )
}

export default Hero