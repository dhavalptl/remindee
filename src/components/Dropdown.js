import React, {useState} from 'react';
import "./Dropdown.css";

function Dropdown({options, defaultValue, onChange}) {
    const [dropdownValue, setDropdownValue] = useState(defaultValue || "");
    const optionNodes = options.map(option => <option key={option.value} value={option.value}>{option.label}</option>);
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setDropdownValue(selectedValue);
        onChange(selectedValue);
    }
    return (
        <select
            className="Select"
            value={dropdownValue}
            onChange={handleChange}>
            {optionNodes}
        </select>
    );
}

export default Dropdown;
