export default function Settings({ data, setData }) {
  const { theme } = data;

  const handleDataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };

  return (
    <div>
      <label>Theme:</label>
      <div>
        <input
          type="radio"
          name="theme"
          value="light"
          checked={theme === "light"}
          onChange={(e) => handleDataChange(e, "theme")}
        />
        <label>Light</label>

        <input
          type="radio"
          name="theme"
          value="dark"
          checked={theme === "dark"}
          onChange={(e) => handleDataChange(e, "theme")}
        />
        <label>Dark</label>
      </div>
    </div>
  );
}
