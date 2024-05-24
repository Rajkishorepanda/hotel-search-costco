import * as React from 'react'




const InputField = ({ id, label, placeholder, type = "text" }) => (
    <div className="input-field">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input id={id} type={type} className="input" placeholder={placeholder} aria-label={label} />
    </div>
  );

  export default InputField;