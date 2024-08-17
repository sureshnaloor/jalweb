import React from "react";

function Textinput({
  register,
  errors,
  watch,
  label,
  name,
  defaultValue,
  isRequired,
  isofPattern,
  placeholder,
  autocomplete,
  minlengthVal,
  maxlengthVal,
  labelcolor,
  readonly
}) {
  return (
    <div >
      <label
        htmlFor={name}
        className={`block mb-2 text-xs font-semibold ${labelcolor} dark:text-white`}
      >
        {label}
      </label>
      <input
        type="text"
        {...register(`${name}`, {
          required: isRequired,
          minLength: {
            value: minlengthVal,
            message: `${minlengthVal} char required`,
          },
          maxLength: {
            value: maxlengthVal,
            message: `max ${maxlengthVal} char allowed`,
          },
          pattern: {
            value: isofPattern,
            message: `Only Letters and numbers allowed`,
          },
        })}
        id={name}
        defaultValue={defaultValue}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
        placeholder={placeholder}
        autoComplete={autocomplete}
        readOnly={readonly}
      />
      {/* <p> {watch(name).length() == 0 ? `Please input ${name}` : null}</p> */}
      <div className="flex justify-between">
        <p className="text-[10px] text-green-500 italic pl-3">
          {watch(name)?.length == 0 ? `${minlengthVal} to ${maxlengthVal} char` : null}
        </p>
        <p className="text-[10px] text-red-500 pl-3 text-semibold italic">
          {errors[`${name}`]?.message ? errors[`${name}`]?.message : null} </p>
       
       
      </div>
    </div>
  );
}

export default Textinput;
