import React from 'react'

function BoxResponse(props) {
    return (
        <div>
            {props.isGreater ?<div class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">DTT effective
                According to the DTT rules, the staff presence duration in Algeria is exceeding <b>{props.maxPresence}</b> days implies the registration of a Permanent Establishment in <b>Algeria</b> .<br />
                The services are taxable in Algeria.<br />
                Recommendations:
                <ul>
                    <li>The supplier is liable to register the contratct with the tax authorities and comply with the tax obligations.</li>
                    <li>In the case the suplier opt for the withholding tax regime, it should be mentioned on the contract.</li>
                    <li>The tax administration accepts the application of the WHT regime for PEs.</li>
                </ul>
            </div> : 
            
            <div class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">DTT effective
                According to the DTT rules, the staff presence duration in Algeria is exceeding <b>{props.maxPresence}</b> days implies the registration of a Permanent Establishment in <b>Algeria</b> .<br />
                The services are taxable in Algeria.<br />
                Recommendations:
                <ul>
                    <li>The supplier is liable to register the contratct with the tax authorities and comply with the tax obligations.</li>
                    <li>In the case the suplier opt for the withholding tax regime, it should be mentioned on the contract.</li>
                    <li>The tax administration accepts the application of the WHT regime for PEs.</li>
                </ul>
            </div>
            
            }
            

        </div>
    )
}

export default BoxResponse
