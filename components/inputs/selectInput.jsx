import React from 'react'

function SelectInput({register, errors, label, name,  choice, labelcolor, defaultValue}) {
  return (
    <div>
        <div>
            <label
              htmlFor={name}
              className={`block mb-2 text-xs font-semibold ${labelcolor}`}
            >
              {label}
            </label>
            <select
              id={name}
              defaultValue={defaultValue}
              {...register(`${name}`, {required: "this is required field"}, {minLength:{value:2,message:"please select category"}}) }
              className={`bg-gray-50 border border-gray-300  text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
             
            >
                {choice.map((item, index) => (
                  <option value={item.value} key={index}>{item.label}</option>
                ))}
              
            </select>
          </div>
    </div>
  )
}

export default SelectInput