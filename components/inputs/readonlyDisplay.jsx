import React from 'react'

function ReadonlyDisplay({readonlydata, label}) {
  return (
    <div>
        <div >
        <label htmlFor={readonlydata} className="block text-gray-700 text-xs font-bold mb-2">
          {label}
        </label>
        <div className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg font-bold tracking-wider block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white">
          {readonlydata}
                </div>
      </div>
    </div>
  )
}

export default ReadonlyDisplay