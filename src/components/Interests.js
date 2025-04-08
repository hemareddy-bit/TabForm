// Interests.js
import React from "react";

export default function Interests({ data, setData, errors }) {
  const { hobbies = [], gender } = data;

  const options = ["Reading", "Gaming", "Coding", "Music"];

  const handleDataChange = (e, field) => {
    if (field === "hobbies") {
      const value = e.target.value;
      const updatedHobbies = hobbies.includes(value)
        ? hobbies.filter((h) => h !== value)
        : [...hobbies, value];

      setData((prev) => ({ ...prev, hobbies: updatedHobbies }));
    } else {
      setData((prev) => ({ ...prev, [field]: e.target.value }));
    }
  };

  return (
    <div>
      <label>Hobbies:</label>
      {options.map((option) => (
        <div key={option}>
          <input
            type="checkbox"
            value={option}
            checked={hobbies.includes(option)}
            onChange={(e) => handleDataChange(e, "hobbies")}
          />
          <label>{option}</label>
        </div>
      ))}
      {errors.hobbies && <span className="error">{errors.hobbies}</span>}

      <div>
        <label>Gender:</label>
        <select
          value={gender || ""}
          onChange={(e) => handleDataChange(e, "gender")}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <span className="error">{errors.gender}</span>}
      </div>
    </div>
  );
}
