import React, { useState, useEffect } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object"; // Ensure we're using DateObject for proper date handling
import "./JalaliDatePicker.css";

export default function JalaliDatePicker({ value, onChange, placeholder }) {
  const [date, setDate] = useState(null);

  // Sync the internal state with the 'value' prop whenever it changes
  useEffect(() => {
    if (value) {
      const dateFromValue = new DateObject(value); // Make sure value is converted to DateObject

      // Use native JS Date to check if it's valid
      if (!isNaN(dateFromValue.toDate())) {
        setDate(dateFromValue); // Update state only with valid date
      } else {
        console.warn("Invalid date passed:", value);
      }
    }
  }, [value]);

  // Handle date change when a new date is selected
  const handleChange = (selectedDate) => {
    if (!selectedDate) {
      setDate(null);
      return;
    }

    // Convert to DateObject with Persian date values
    const persianDate = new DateObject({
      year: selectedDate.year,
      month: selectedDate.month - 1, // Month is 0-indexed in JavaScript
      day: selectedDate.day,
      calendar: persian,
    });

    // Use native JS Date to check if it's valid
    if (!isNaN(persianDate.toDate())) {
      setDate(persianDate); // Update state with the newly selected date
    } else {
      console.warn("Invalid date selected:", selectedDate);
    }

    if (onChange) {
      const gregorianDate = persianDate.toDate(); // Convert to Gregorian Date for passing to parent
      onChange(gregorianDate);
    }
  };

  return (
    <DatePicker
      value={date ? date.toDate() : null} // Ensure we pass a valid JavaScript Date or null
      onChange={handleChange}
      calendar={persian}
      locale={persian_fa}
      inputClass="jalali-date-input"
      containerClass="jalali-date-container"
      className="jalali-calendar"
      placeholder={placeholder}
      format="YYYY/MM/DD"
    />
  );
}
