import React from 'react'

function BoxResponse(props) {
    return (
        <div>
            {props.isGreater ?<div class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                According to Algeria - <b>{props.countryName}</b> DTT rules, the staff presence duration exceeding <b>{props.maxPresence}</b> days implies the registration 
                of a Permanent Establishment in Algeria which makes the service taxable by the Algerian tax authority.
                <br/>
                <ul>
                    <li>The supplier is liable to register the PE with the tax authorities, under the Common Tax Regime in accordance with the practice in force, which should be mentioned on contract.</li>
                    <li>Although suppliers in general avoid the registration of a PE, and prefer to opt for the withholding tax regime and to gross up the amount of the transaction (which is prohibited by Art. 31 of the 2009 Complementary Finance Law),</li>
                    <li></li>
                </ul>
            </div>
            
            :
            
            <div class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">DTT effective
                It is recommended to mention on the contract that <b>The service will be exempt from WHT in Algeria and taxed in {props.countryName},</b>  in accordance with Algeria - {props.countryName} DTT rules.
                <ul>
                    <li>A copy of the Tax Residence Certificate should be included in the payment file submitted to the tax authorities.</li>
                </ul>
            </div>
            
            }
            

        </div>
    )
}

export default BoxResponse
