import React, {useState, useEffect} from 'react'
import {fetchCountries} from '../../Api'

function CountryPicker({handleCountryChange}) {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    const [countryName, setCountryName] = useState('');
    useEffect(()=>{
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())

        }
        // console.log(fetchCountries)
        fetchAPI()
    },[])
    // console.log(fetchedCountries)
    return (
        <div className="country-selector">
            <form>
                <select defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {fetchedCountries.map((name,i)=>(
                        <option key={i} value={name}>{name}</option>
                    ))}
                </select>
            </form>
        </div>
    )
}

export default CountryPicker
