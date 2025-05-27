import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { EmailForm } from "./components/EmailForm"
import { useState } from "react"

export function Layout() {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
  if (!itemName || itemName.trim() === "") return; // ignore empty or undefined names

  setItems((prev) => {
    const index = prev.findIndex((item) => item.name === itemName);
    if (index !== -1) {
      const updated = [...prev];
      updated[index].quantity += 1;
      return updated;
    }
    return [...prev, { name: itemName, quantity: 1 }];
  });
};


  const formattedMessage = `\n\nSeznam:\n-----------------------\n${items
    .map((item) => `${item.name} (x${item.quantity})`)
    .join("\n")}`;

  return (
    <>
      <Navbar />
      <Header />
      <Outlet context={{ addItem }} />
      <EmailForm message={formattedMessage} />
      <Footer />
    </>
  );
}
