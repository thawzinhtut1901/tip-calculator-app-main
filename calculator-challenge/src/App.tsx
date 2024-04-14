import { useEffect, useState } from 'react'
import './App.css'
import logo from "./assets/images/logo.svg"
import Display from './components/Display'
import Form from './components/Form'


function App() {
  const [bill, setBill ] = useState(0);
  const [tip, setTip ] = useState(0);
  const [people, setPeople] = useState("");
  const [calculatedTip, setCalculatedTip ] = useState(0);
  const [total, setTotal ] = useState(0);
  

  useEffect(() => {
    if(bill > 0 && people > "0" && tip > 0){
      setCalculatedTip(bill * (tip / 100)); 
      setTotal(calculatedTip + bill); 
    }
  }, [bill, people, tip, calculatedTip]);

  const handleResetBtn = () => {
    setBill(0);
    setTip(0);
    setPeople("");
    setCalculatedTip(0);
    setTotal(0);
  }

  return (
    <>
      <div className="wrapper">
        <img src={logo}  alt="Splitter Logo"/>
        <div className="container">
          <Form 
            bill  = {bill }
            setBill = {setBill }
            tip  = {tip}
            setTip = {setTip}
            people = {people}
            setPeople = {setPeople}
          />
          <Display 
            total={total}
            people={people}
            calculatedTip={calculatedTip}
            handleResetBtn={handleResetBtn}
          />
        </div>
      </div>
    </>
  )
}

export default App
