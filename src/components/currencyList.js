import React from 'react'
import Currency from './currency.js'

function CurrencyList (props){
        return(
            <div className='currency-list'>
            {props.selectedRates.map((selectedRate,index)=>{
                return(
                    <Currency key={index} selectedRate={selectedRate} setPopUp={props.setPopUp}/>
                )
            })}
            </div>
        )
}

export default CurrencyList;