import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { Contacts } from "./pages/Contacts"
import { Layout } from "./Layout"

export function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/Menu" element={<Menu />}/>
          <Route path="/Contacts" element={<Contacts />}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}
