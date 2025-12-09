
import './index.css'
import HomeComponent from './home'
import SideNav from './side-nav'
function App() {
  

  return (
    <div className='flex border-4 overflow-hidden h-screen'>
      <SideNav/>
      <HomeComponent/>
    </div>
  )

}

export default App
