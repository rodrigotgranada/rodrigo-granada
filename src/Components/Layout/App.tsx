import "./App.scss"
import { Outlet } from 'react-router'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
const App = () => {
  return (
    <div className="app bg-bgColor text-textColor">
      <Nav />
      <div className='app-body'><Outlet /></div>
      <Footer />
    </div>
  )
}

export default App