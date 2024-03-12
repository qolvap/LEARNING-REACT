import React from "react";
import ReactDOM from "react-dom";
import Menu from "./Menu/Menu";
import MenuButton from "./Menu/MenuButton";
import MenuDropdown from "./Menu/MenuDropdown";
import MenuItem from "./Menu/MenuItem";

function App() {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <Menu>
      <MenuButton>Week Days</MenuButton>
      <MenuDropdown>
        {weekDays.map((day) => (
          <MenuItem key={day}>{day}</MenuItem>
        ))}
      </MenuDropdown>
    </Menu>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
