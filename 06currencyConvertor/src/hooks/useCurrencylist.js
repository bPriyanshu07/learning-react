import { useEffect, useState } from "react";

function useCurrencyList(){
    const [currencies , setCurrencies] = useState([])

    useEffect(()=>{
        fetch("https://api.frankfurter.dev/v2/currencies")
        .then((res) => res.json())
        .then((data) =>{
            setCurrencies(
                data.map((currency) => currency.code.toLowerCase())
            )
        })
    } , [])

    return currencies
}

export default useCurrencyList;