import React , {useState , useEffect} from 'react'

function Redevences() {
    //choose a country and input the gross amount 
      // display the conditions
      // it will be calculated automaticaly
      const [apiData , setApiData]= useState([])
      const vat = 0.19;
      const URL = 'http://127.0.0.1:8000/api/countries'
      useEffect(()=>{
        fetch(URL).then(res => res.json()).then(data => setApiData(data))
      } , [])

      console.log(apiData)
  return (
    <div>
      <h1>Redevences</h1>
      <form>
        <select>
            <option  defaultValue>
                Country
            </option>
            {apiData.map((option) => {
                    return (
                        <option key={option.id} value={option.id}>
                            {option.country_name}
                        </option>
                    );
                })}
        </select>
        <input placeholder='Gross amount'/>
      </form>
      
    </div>
  )
}

export default Redevences
