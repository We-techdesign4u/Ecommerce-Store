import React from "react";

const FormFieldText = ({
  title,
  placeholder,
  value,
  name,
  handleChangeText,
  keyboardType,
  type,
  border,
  multiple,
  fieldtype,
}) => {
  return (
    <div>
      <p className="font-Lato font-semibold mb-1">{title}</p>
      <input
        className={`bg-white w-full sm:w-[400px] h-[40px] pl-2 border-[1px] border-Primary rounded-md ${border}`}
        type="text"
        value={value}
        name={name}
        onChange={handleChangeText}
        placeholder={placeholder}
        multiple={multiple}
        fieldtype={fieldtype}
      />
    </div>
  );
};

export default FormFieldText;
