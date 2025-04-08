import React, { useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

const TabForm = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    hobbies: [],
    gender: "",
    notifications: false,
  });

  const [errors, setErrors] = useState({});

  const validateTab = () => {
    const newErrors = {};
    if (tabIndex === 0) {
      if (!data.name.trim()) newErrors.name = "Name is required.";
      if (!data.age) newErrors.age = "Age is required.";
      if (!data.email.includes("@")) newErrors.email = "Valid email required.";
    }
    if (tabIndex === 1) {
      if (data.hobbies.length === 0)
        newErrors.hobbies = "Select at least one hobby.";
      if (!data.gender) newErrors.gender = "Gender is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextTab = () => {
    if (validateTab()) {
      setTabIndex((prev) => prev + 1);
      setErrors({});
    }
  };

  const prevTab = () => {
    setTabIndex((prev) => prev - 1);
    setErrors({});
  };

  const renderTab = () => {
    switch (tabIndex) {
      case 0:
        return <Profile data={data} setData={setData} errors={errors} />;
      case 1:
        return <Interests data={data} setData={setData} errors={errors} />;
      case 2:
        return <Settings data={data} setData={setData} />;
      default:
        return <div>Done</div>;
    }
  };

  return (
    <div>
      <div className="heading-container">
        <div className="heading" onClick={() => setTabIndex(0)}>
          Profile
        </div>
        <div className="heading" onClick={() => setTabIndex(1)}>
          Interests
        </div>
        <div className="heading" onClick={() => setTabIndex(2)}>
          Settings
        </div>
      </div>
      <div className="tab-body">{renderTab()}</div>
      <div style={{ marginTop: "20px" }}>
        {tabIndex > 0 && <button onClick={prevTab}>Back</button>}
        {tabIndex < 2 && <button onClick={nextTab}>Next</button>}
        {tabIndex === 2 && (
          <button
            onClick={() => {
              alert("Submitted\n\n" + JSON.stringify(data, null, 2));
            }}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
