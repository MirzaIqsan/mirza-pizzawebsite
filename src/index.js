import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

function App(){
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
           
        </div>
    )
}

function Header(){
    return (<div>
        <h1 style={{color: "orange", fontSize: "32px", textTransform: "uppercase"}}>Mirza's Pizza co.</h1>
        
    </div>)
}

// function Pizza(){
//     return (
//     <div>
//         <img src = "/pizzas/spinaci.jpg" alt="Pizza"/>
//         <h3> Pizza Spinaci</h3>
//         <h4> Tomato, Mozarella, spinach, ricotta cheese</h4>
//         <h4> 10</h4>
//     </div>
//     )
// }

// function Pizza2(){
//     return (
//     <div>
//         <img src = "/focaccia.jpg" alt="Pizza"/>
//         <h3> Pizza foccacia</h3>
//         <h4> Tomato, Mozarella, spinach, ricotta cheese</h4>
//         <h4> 12</h4>
//     </div>
//     )
// }

function Menu(){
   return(
    <div className="menu">
        <h2>Our Menu</h2>
        <h4>Authentic Italian Cusine, all from our stone oven </h4>
            {pizzaData.map((pizzaData) => (
                <Pizza 
                    
                    photoName={pizzaData.photoName} 
                    name={pizzaData.name} 
                    ingredients={pizzaData.ingredients} 
                    price={pizzaData.price} 
                />
            ))}
    </div>
   )
}

function Pizza({ photoName, name, ingredients, price}){
    return(
        <div>
            <img src={photoName} alt={name}/>
            <h3>{name}</h3>
            <h3>{ingredients}</h3>
            <h4>{price}</h4>
        </div>
        
        

    )
}

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "/pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

const d = new Date()
let hour = d.getHours()

function Footer(){

    const isOpen = hour >= 10 && hour < 22;

    return(
        <div className="footer">
        
        <footer> {isOpen ? "We're currently open" : "Sorry, we're closed"} </footer>
        <button className="btn">Order</button>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <App />
    </div>
)