import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CurrencyConverter = () => {
    const [disable, setDisable] = useState(true);
    const [currencies, setCurrencies] = useState([]);
    const [selectedCurrencies, setSelectedCurrencies] = useState({ first: "", second: "" });
    const [convertedAmount, setConvertedAmount] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://currency-exchange.p.rapidapi.com/listquotes',
        headers: {
            'X-RapidAPI-Key': 'd4584fc53amshc3b26f4e59b237fp195eeajsnd3a4644cf75f',
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
    };

    async function getCurrencies() {
        try {
            const response = await axios.request(options);
            setCurrencies(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    function handleChange(event) {
        setSelectedCurrencies({ ...selectedCurrencies, [event.target.name]: event.target.value });
    }

    async function Convert() {
        const options = {
            method: 'GET',
            url: 'https://currency-exchange.p.rapidapi.com/exchange',
            params: {
                from: selectedCurrencies.first,
                to: selectedCurrencies.second,
                q: '10'
            },
            headers: {
                'X-RapidAPI-Key': 'd4584fc53amshc3b26f4e59b237fp195eeajsnd3a4644cf75f',
                'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
            }
        };
        try {
            const response = await axios.request(options);
            setConvertedAmount(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (selectedCurrencies.first && selectedCurrencies.second) {
            setDisable(false);
        }
    }, [selectedCurrencies]);

    useEffect(() => {
        getCurrencies();
    }, []);

    return (
        <div style={{ textAlign: 'center', border: '1px solid black', padding: '20px' }}>
            <h2>Currency Converter</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                    <label>Select First Currency</label><br />
                    <select onChange={handleChange} name='first' >
                        <option>Click here to select First Currency</option>
                        {currencies.map((c) => (
                            <option value={c}>{c}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Select Second Currency</label><br />
                    <select onChange={handleChange} name='second'>
                        <option>Click here to select Second Currency</option>
                        {currencies.map((c) => (
                            <option value={c}>{c}</option>
                        ))}
                    </select>
                </div>
            </div>
            <button disabled={disable} onClick={Convert} style={{ margin: '10px' }}>Convert</button>
            {convertedAmount && 
                <div style={{ border: '1px solid black', padding: '10px', margin: '10px', display: 'inline-block' }}>
                    1 {selectedCurrencies.first} = {convertedAmount} {selectedCurrencies.second}
                </div>
            }
        </div>
    );
};

export default CurrencyConverter;
