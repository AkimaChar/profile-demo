import React from 'react';

const CustomInput = ({label, type, name, value, onChange, required, placeholder}) => {
    return (
        <>
			{!!label && <label htmlFor={name} className="additional-info-item">{label}</label>}
			<input
				type={type}
				id={name}
                name={name}
				value={value}
				onChange={onChange}
				required={required}
                placeholder={placeholder}
			/>
		</>
    );
}

export default CustomInput;
