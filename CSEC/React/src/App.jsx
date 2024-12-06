
import './App.css'
import Card from './components/Card'
import RotateImage from './Components/RotateImage'
import State3 from './Components/State3'
import pic from './Images/security_hacker_names.webp'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <h1>Welcome to my React App</h1> */}
      <Card name="Nisha Yadav" roll="9009" img={pic}/>
      {/* <Card/>
      <Card/> */}
      <State3/>
      <RotateImage/>
    </div>
  )
}

export default App
