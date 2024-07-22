import React from 'react'

function Radioinput({register, errors, watch, radiochoice}) {
    const selectedValue = watch(`${radiochoice[0].groupname}`);
  return (
    <div className='w-full flex justify-between'>
        <div>
         <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full col-span-2">
            {radiochoice[0].title}
          </h3>
          <div className="flex flex-col">
            <div className="flex items-center me-4">
              <input
                id={radiochoice[0].name}
                type="radio"
                value={radiochoice[0].value}
                name={radiochoice[0].groupname}
                {...register(radiochoice[0].groupname, {required: true})}
                
                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor={radiochoice[0].name}
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {radiochoice[0].label}
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                id={radiochoice[1].name}
                type="radio"
                value={radiochoice[1].value}
                name={radiochoice[1].groupname}
                {...register(radiochoice[1].groupname, {required: true})}   
               
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor={radiochoice[1].name}
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {radiochoice[1].label}  
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                
                id={radiochoice[2].name}
                type="radio"
                value={radiochoice[2].value}
                name={radiochoice[2].groupname}
                {...register(radiochoice[2].groupname, {required: true})}
                
                className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor={radiochoice[2].name}
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {radiochoice[2].label}
              </label>
            </div>
          </div>
          </div>
          {selectedValue && <p className='text-sm text-orange-500'>Selected Value: {selectedValue}</p>}
    </div>
  )
}

export default Radioinput