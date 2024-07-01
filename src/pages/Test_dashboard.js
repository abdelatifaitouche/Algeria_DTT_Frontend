import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../components/Navbar'
import Service from '../Services/Service'
import Dividendes from '../Services/Dividendes'
import { data } from 'autoprefixer'






function Test_dashboard() {
    

    const [mode, setMode] = useState('view')
    const [apiData, setApiData] = useState(null)
    const [accessToken, setAccessToken] = useState('');


    useEffect(() => {
        // Retrieve the JSON string from localStorage
        const tokenString = localStorage.getItem('authTokens');
        if (tokenString) {
            // Parse the JSON string into an object
            const tokenObject = JSON.parse(tokenString);

            // Extract the access token value
            const accessTokenValue = tokenObject.access;

            // Update the state with the access token value
            setAccessToken(accessTokenValue);
            const URL = 'http://127.0.0.1:8000/api/countries'


            fetch(URL, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessTokenValue}`,

                },
            }).then(res => res.json()).then(data => {
                setApiData(data)
                console.log('api data : ')
                console.log(apiData);
            })
        } else {
            console.error('No authTokens found in localStorage');
        }
    }, []);

    

    
    return (
        <div>
            <NavBar />
            <div class="p-4 sm:ml-64">
                <nav class="flex px-5 py-3 text-white border border-gray-200 rounded-lg bg-purple-600  dark:border-gray-700" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li class="inline-flex items-center">
                            <button onClick={() => setMode('view')} class="inline-flex items-center text-sm font-medium text-white hover:text-blue-600 dark:hover:text-white">
                                <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Choose Revenue Type
                            </button>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <svg class="rtl:rotate-180 block w-3 h-3 mx-1 text-white-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <a class="ms-1 text-sm font-medium text-white hover:text-blue-600 md:ms-2 dark:hover:text-white">{mode}</a>
                            </div>
                        </li>

                    </ol>
                </nav>
                <br />
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Choose a revenue Type</h5>
                {mode === 'view' ? <div>
                    <div className='flex gap-2'>
                        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Services</h5>
                            </a>
                            <button onClick={()=>setMode('Service')} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Services
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>

                        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Redevences</h5>
                            </a>
                            <button onClick={()=>setMode('view')}  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Redevences
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>

                        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dividendes</h5>
                            </a>
                            <button onClick={()=>setMode('Dividendes')} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Dividendes
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>


                    </div>
                </div> : <div></div>}
            
            </div>

            {mode === 'Service' ? <Service apiData={apiData} /> : <div></div>}
            {mode === 'Dividendes'?<Dividendes/> : <div></div>}

        </div>
    )
}

export default Test_dashboard


/**
 * 
 * 
 * {user? (<p onClick={logoutUser}>Log out</p>):(<p>Not logged in</p>)}
        {user && <p>Hello {user.email}!</p>}
 */