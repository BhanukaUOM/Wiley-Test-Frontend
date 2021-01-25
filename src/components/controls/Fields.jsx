import React from "react";

export const InputField = ({
  input,
  children,
  placeholder,
  className,
  type,
  userType,
  meta: { touched, error, warning },
  reset,
  data,
  fields,
  checked,
  options,
  disabled,
  ...rest
}) => {
  switch (type) {
    case "select":
      return (
        <div>
          <select
            {...input}
            placeholder={placeholder}
            type={type}
            disabled={disabled}
            className={className}
            {...rest}
          >
            {children}
          </select>
          {touched &&
            ((error && (
              <div className="invalid-feedback" style={{ display: "block" }}>
                {error}
              </div>
            )) ||
              (warning && <span>{warning}</span>))}
        </div>
      );
    case "textarea":
      return (
        <div>
          <textarea
            {...input}
            placeholder={placeholder}
            type={type}
            disabled={disabled}
            className={className}
            maxLength="1000"
            {...rest}
          />
          <h6 className="text-right">
            {1000 - input.value.length} characters remain
          </h6>
          {touched &&
            ((error && (
              <div className="invalid-feedback" style={{ display: "block" }}>
                {error}
              </div>
            )) ||
              (warning && <span>{warning}</span>))}
        </div>
      );

    default:
      return (
        <div>
          <input
            {...input}
            placeholder={placeholder}
            type={type}
            className={className}
            disabled={disabled}
            {...rest}
          />
          {touched &&
            ((error && (
              <div className="invalid-feedback" style={{ display: "block" }}>
                {error}
              </div>
            )) ||
              (warning && <span>{warning}</span>))}
        </div>
      );
  }
};
