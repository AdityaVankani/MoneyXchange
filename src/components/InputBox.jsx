import {  useId } from 'react'
import React from 'react';

function InputBox({
    lable,
    oncurrencychange,
    onamtchange,
    amt,
    amtdisable = false,
    currencydisable = false,
    selectedcurrency = "usd",
    className = "",
    curroption = [],}

) {
    const amtid = useId();
    return (
        <div className={` text-sm bg-white flex p-3 rounded-sm ${className}`}>
            <div className='w-1/2'>
                <label htmlFor="amtid" className='text-black/40 inline-block mb-2'>{lable}</label>
                <input type="number" value={amt} id={amtid} disabled={amtdisable} 
                className="outline-none w-full bg-transparent py-1.5"
                placeholder='Amount' onChange={(e) => { onamtchange && onamtchange(Number(e.target.value)) }} />
            </div>

            <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 mb-2 w-full '> currency: </p>
            <select 
            className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none '
            value={selectedcurrency}
            onChange={(e)=>{oncurrencychange && oncurrencychange(e.target.value
            )}}
            disabled={currencydisable}>


                {curroption.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
            </select>

            </div>
        </div>
    );
}

export {InputBox} ;
