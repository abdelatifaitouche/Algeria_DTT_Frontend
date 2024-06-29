import React, { useState, useEffect } from 'react'
import BoxResponse from '../components/BoxResponse'
import Service from '../Services/Service'

function Dashboard() {
    const [mode, setMode] = useState('view')
    const [formData, setFormData] = useState({ id: 0 })
    

    
    return (

        <div class="p-4 sm:ml-64">
        <div className='dashboard' class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
             <p>Dashboard</p>
             </div>
             </div>

    )
}

export default Dashboard


/*


Get the drop down menu and list the different services
    # We have three Services : 
        # Service
        # Redevences
        # Dividendes

    Once a service was choosen , 
        Switch the display to that component



*/