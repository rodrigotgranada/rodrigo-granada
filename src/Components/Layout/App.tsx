import "./App.scss"
import { Outlet } from 'react-router'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
const App = () => {
  return (
    <div className="app bg-bgColor text-textColor">
      <Nav />
      <main className='w-full space-y-10 m-auto px-4 py-12'><Outlet /></main>
      <Footer />
    </div>
  )
}

export default App