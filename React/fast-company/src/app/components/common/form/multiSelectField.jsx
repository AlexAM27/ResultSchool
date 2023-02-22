import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const MultiSelectField = ({
    label,
    options,
    onChange,
    name
    // error
}) => {
    // const getInputClasses = () => {
    //     return "form-select" + (error ? " is-invalid" : "");
    // };

    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionName) => ({
                  label: options[optionName].name,
                  value: options[optionName]._id
              }))
            : options;

    const handleChange = (value) => {
        onChange({ naem: name, value });
    };

    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            <Select
                isMulti
                options={optionsArray}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleChange}
                name={name}
                closeMenuOnSelect={false}
            />
            {/* {error && <div className="invalid-feedback">{error}</div>} */}
        </div>
    );
};

MultiSelectField.propTypes = {
    label: PropTypes.string,
    options: PropTypes.oneOfType(PropTypes.object, PropTypes.array),
    // value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func
    // error: PropTypes.string
};

export default MultiSelectField;
