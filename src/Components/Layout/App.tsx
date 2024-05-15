import "./App.scss"
import { Outlet } from 'react-router'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
const App = () => {
  return (
    <div className="app bg-bgColor text-textColor">
      <Nav />
      <main className='app-body gap-y-8 p-6'><Outlet /></main>
      <Footer />
    </div>
  )
}

export default App