import React, { useState, useEffect } from 'react'
import BoxResponse from '../components/BoxResponse'


function Service(props) {

    const [selectValue, setSelectValue] = useState('')
    const [filtred, setFiltred] = useState(null)
    const [maxPresence, setMaxPresence] = useState(0)

    const [formData, setFormData] = useState({ id: 0, maxpresence: 0 })
    const [accessToken, setAccessToken] = useState('');


    function handleInputChange(event) {
        const { name, value } = event.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const filtred = props.apiData.filter(country => country.id == formData.id)
        setFiltred(filtred);
    }

    return (      
        <div class="p-4 sm:ml-64">
            <div className='dashboard' class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h1 class="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-xl dark:text-white">Please, select a <span class="text-purple-600 dark:text-blue-500">Country</span> To learn more</h1>
                <form class="flex items-center justify-center  gap-2 my-7" onSubmit={handleSubmit}>
                    <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='id' onChange={handleInputChange} value={formData.id}>
                        <option defaultValue>
                            Select Country
                        </option>
                        
                        {props.apiData.map((option) => {
                            return (
                                <option key={option.id} value={option.id}>
                                    {option.country_name}
                                </option>
                            );
                        })}
                    </select>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name='maxpresence' placeholder='max presence' value={formData.maxpresence} onChange={handleInputChange} />
                    <button class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2" type="submit">filter</button>
                </form>
                
                {filtred?filtred.map(country => (
                    <>
                        <div key={country.id}>
                            {country.max_presence < formData.maxpresence ? <BoxResponse isGreater={true} maxPresence={country.max_presence} countryName={country.country_name} /> : <BoxResponse isGreater={false} maxPresence={country.max_presence} countryName={country.country_name} />}
                        </div>
                    </>
                )) : <div></div>}

            </div>

        </div>
    )
}

export default Service
/**
 *     <div>{country.conditions.map(cnd =>(
                        <li>{cnd.condition}</li>
                    ))}</div>
 */

/*
<form action="" id="myForm" method="POST" class="max-w-sm mx-auto">

                <label for="revenue_type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>

                <select  name="revenue_type" id="revenue_type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="" default>Type de revenue</option>
                    <option value="services">Services</option>
                    <option value="redevences">Redevences</option>
                    <option value="dividendes">Dividendes</option>
                </select>

                <button type="submit" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Next</button>
            </form>



*/