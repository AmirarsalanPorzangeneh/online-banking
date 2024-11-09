import { Controller } from "react-hook-form";
import { DatePicker } from "zaman";

import React from "react";

export default function CustomDate(props) {
  const { control, name, error, label, placeholder } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={{ color: "white", fontSize: "14px", marginBottom: "5px" }}>
        {label}
      </label>
      <Controller
      inputStyle
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            onChange={(e) => field.onChange(new Date(e.value))}
            value={field.value || null}
            placeholder={placeholder}
            inputStyle
          />
        )}
      />
      {error && <p style={{ color: "red", paddingBottom: "10px" }}>{error}</p>}
    </div>
  );
}
