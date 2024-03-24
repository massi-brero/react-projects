import React from 'react'
import ReactDOM from 'react-dom/client'
import { pizzaData } from './data/data'
import './index.css'

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className='header'>
      <h1>Massi's Punchy Pizzas</h1>
    </header>
  )
}

function Menu() {
  const hasPizzas = Array.isArray(pizzaData) && pizzaData.length > 0
  return (
    <main className='menu'>
      <h2>Unsere Pizzen</h2>

      {hasPizzas ? (
        <ul className='pizzas'>
          {pizzaData.map((pizza) => (
            <Pizza pizza={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>Wir sind leider ausverkauft!</p>
      )}
    </main>
  )
}

function Pizza({ pizza }) {
  if (pizza.soldOut) return null

  return (
    <li className='pizza'>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price}</span>
      </div>
    </li>
  )
}

function Footer() {
  const hour = new Date().getHours()
  const openHour = 10
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour

  return (
    <footer className='footer'>
      <div className='order'>
        {isOpen ? (
          <p>Wir haben bis {closeHour}:00 Uhr geöffnet.</p>
        ) : (
          <Closed openHour={openHour} closeHour={closeHour} />
        )}
      </div>
      <button className='btn'>Bestellen</button>
    </footer>
  )
}

function Closed({ openHour, closeHour }) {
  return (
    <div>
      <p>
        Wir haben leider geschlossen! Wir sind jeden Tag zwischen {openHour}:00
        Uhr und {closeHour}:00 für Sie da!
      </p>
    </div>
  )
}

// React v18
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
