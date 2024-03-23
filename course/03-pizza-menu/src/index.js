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
  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      <ul className='pizzas'>
        {pizzaData.map((pizza) => (
          <Pizza pizza={pizza} key={pizza.name} />
        ))}
      </ul>

      {/* {<Pizza
        name='Pizza Spinacci'
        ingredients='stuff'
        image='pizzas/spinaci.jpg'
        price={10.0}
      />} */}
    </main>
  )
}

function Pizza(props) {
  const hour = new Date().getHours()
  const openHour = 10
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour

  if (isOpen) {
    // alert('Wir haben geöffnet')
  } else {
    alert('Wir haben geschlossen')
  }
  console.log(props.pizza.photoName)

  return (
    <li className='pizza'>
      <img src={props.pizza.photoName} alt={props.pizza.name} />
      <div>
        <h3>{props.pizza.name}</h3>
        <p>{props.pizza.ingredients}</p>
        <span>{props.pizza.price}</span>
      </div>
    </li>
  )
}

function Footer() {
  return (
    <footer className='footer'>
      {new Date().toLocaleTimeString()} Zur Zeit geöffnet!
    </footer>
  )
}

// React v18
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
