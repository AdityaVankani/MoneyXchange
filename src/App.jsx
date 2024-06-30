import { useState } from 'react'
import {InputBox} from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amt,setamt]=useState()
  const [from,setfrom]=useState("usd")
  const [to,setto]=useState("inr")
  const [convertamt,setconvertamt]=useState()

  const currencyinfo1=useCurrencyInfo(from)
  const op=Object.keys(currencyinfo1)

  const swap=()=>{
    setfrom(to)
    setto(from)
    setconvertamt(amt)
    setamt(convertamt)
  }

  const convert =()=>
  {
    const convertedValue = amt * currencyinfo1[to];
    setconvertamt(convertedValue);
  }

  return (
    <>
      <h1 className='bg-gray-800 text-center text-4xl rounded-md font-semibold  text-green-200  p-4' >🚀 Money Xchange $</h1>
      <marquee  id="m1" behavior="right" direction="left"  className='text-white text-4xl font-medium my-10'><span className='italic mx-3'>Real time</span>currency convertor</marquee>
      <div className="w-full my-32">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            lable="From"
                            amt={amt}
                            curroption={op}
                            oncurrencychange={(currency) => setfrom(currency)}
                            selectedcurrency={from}
                            onamtchange={(amt) => setamt(amt)}
                        />
                    </div>
                    
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-purple-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            lable="To"
                            amt={convertamt}
                            curroption={op}
                            oncurrencychange={(currency) => setto(currency)}
                            selectedcurrency={to}
                            amtdisable
                            onamtchange={(amt) => setamt(amt)}

                        />
                    </div>
                    <button type="submit" className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
                
            </div>
        </div>
    
     
    </>
  )
}

export default App;
