import React from 'react';


const FormField = ({labelName, placeholder, inputType, isTextArea, value, handleChange}) => {
  return (
    <label className="flex-1 w-full px-3 flex flex-col text-gray-300 text-sm font-medium mb-1 ">
      {labelName && (
        <span className="text-[14px] leading-[22px] mb-[10px] ">{labelName} <span className="text-red-600 ">*</span></span>
      )}
      {isTextArea ? (
        <textarea
            required
            value={value}
            onChange={handleChange}
            rows={10}
            placeholder={placeholder}
            className="py-[15px] sm:px-[25px] outline-none border-[1px] border-[#3a3a43] bg-transparent text-[14px] text-gray-300 rounded-[10px] "
        />
      ): (
        <input
            required
            value={value}
            onChange={handleChange}
            type={inputType}
            placeholder={placeholder}
            className="py-[15px] sm:px-[25px] outline-none border-[1px] border-[#3a3a43] bg-transparent text-[14px] text-gray-300 rounded-[10px] "
        />
      )}
    </label>
  )
}

export default FormField
