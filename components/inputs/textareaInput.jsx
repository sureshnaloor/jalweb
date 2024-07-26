import React from "react";

function TextareaInputcomponent({
  label,
  name,
  rows = 2,
  register,
  isRequired,
  watch,
  isofPattern,
  minlengthVal,
  defaultValue,
  maxlengthVal, 
  errors,
  placeholder,
}) {
  return (
    <div>
      <div>
        <label
          htmlFor={name}
          className="block mb-2 text-xs font-semibold text-gray-900 dark:text-white"  
        >
          {label}
        </label>
        <textarea
          id={name}
          rows={rows}
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
          defaultValue={defaultValue}
          className="block p-2.5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder={placeholder}
        ></textarea>
        <div className="flex justify-between">
          <p className="text-[10px] text-semibold italic pl-3 text-green-500">
            {watch(name)?.length == 0
              ? ` ${minlengthVal} to ${maxlengthVal} char`
              : null}
          </p>
          <p className="text-[10px] text-red-500 pl-3 text-semibold italic">
            {errors[`${name}`]?.message ? errors[`${name}`]?.message : null}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TextareaInputcomponent;
