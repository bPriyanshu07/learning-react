import { useState } from 'react'
import  InputBox  from './components/InputBox.jsx'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import useCurrencyList from './hooks/useCurrencylist'
function App() {
  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState('usd')
  const [to , setTo] = useState('inr')
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currenyInfo = useCurrencyInfo(from,to)
  const currencyList = useCurrencyList()

  const swap = () =>{
    setFrom(to)
    setTo(from)
  }

  const convert =  () => setConvertedAmount(amount * useCurrencyInfo[to])

  return (
        <div>hdfiah</div>
    );
}

export default App
