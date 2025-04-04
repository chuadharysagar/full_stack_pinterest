import './app.css'
import TopBar from './components/topBar/TopBar'
import LeftBar from './components/leftBar/LeftBar'
import Gallary from './components/gallary/Gallary'


const App = () => {
  return (
    <div className='app'>
      <LeftBar></LeftBar>
      <div className="content">
        <TopBar></TopBar>
        <Gallary></Gallary>
      </div>
    </div>
  )
}

export default App