import React from "react";

function Dateinput({
  label,
  name,
  register,
  errors,
  watch,
  minval,
  maxval,
  labelcolor,
}) {
  return (
    <div>
      <div className="sm:col-span-1">
        <label
          htmlFor={name}
          className={`block mb-2 text-xs font-semibold ${labelcolor} `}
        >
          {label}
        </label>
        <input
          type="date"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          name={name}
          id={name}
          // defaultValue={defaultValue}

          min={minval}
          max={maxval}
          {...register(`${name}`, {
            valueAsDate: true,
            required: { value: true, message: "mandatory to fill" },
          })}
        />
      </div>
      <div className="flex justify-between">
        <p className="text-[10px] text-semibold italic pl-3 text-green-500">
          {!watch(name) || watch(name) === "undefined"
            ? `${minval} to ${maxval} date only`
            : null}
        </p>
        <p className="text-xs text-red-500">
          {errors && errors[`${name}`]?.message
            ? errors[`${name}`]?.message
            : null}{" "}
        </p>
      </div>
    </div>
  );
}

export default Dateinput;
