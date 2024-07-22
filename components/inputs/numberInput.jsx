import React from "react";

function Numberinput({ register, label, name, errors, minval, maxval, watch }) {
  return (
    <div>
      <div>
        <label
          htmlFor={name}
          className="block mb-2 text-xs font-semibold text-gray-900 dark:text-white"
        >
          {label}
        </label>

        <input
          type="number"
          {...register(`${name}`, {
            valueAsNumber: true,
            required: { value: true, message: "mandatory to fill" },
            min: { value: minval, message: `${minval} is minimum value` },
            max: { value: maxval, message: `${maxval} is maximum value` },
            pattern: {
              value: /^(0|[1-9]\d*)(\.\d+)?$/,
            },
          })}
          id={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        />
        <div className="flex justify-between">
          <p className="text-[10px] text-semibold italic pl-3 text-green-500">
            {!watch(name) ? `${minval} to ${maxval} char` : null}
          </p>
          <p className="text-[10px] text-red-500 pl-3 text-semibold italic">
            {errors && errors[`${name}`]?.message
              ? errors[`${name}`]?.message
              : null}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Numberinput;
