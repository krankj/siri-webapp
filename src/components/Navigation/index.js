import React from "react";
import styles from "./index.module.css";
import { ReactComponent as MenuIcon } from "assets/icons/common/dropdown.svg";
import { Link } from "react-router-dom";

const Navigation = ({ list }) => {
  const [dropDownVisibility, setDropDownVisibility] = React.useState("none");
  const [dropDownIconOrientation, setDropDownIconOrientation] = React.useState({
    transform: "rotate(0deg)",
  });

  const toggleDropDown = () => {
    setDropDownVisibility((prev) => (prev === "flex" ? "none" : "flex"));
  };

  React.useEffect(() => {
    if (dropDownVisibility === "none") {
      setDropDownIconOrientation({
        transition: "transform 0.3s",
        transform: "rotate(0deg)",
      });
    } else {
      setDropDownIconOrientation({
        transition: "transform 0.5s",
        transform: "rotate(180deg)",
      });
    }
  }, [dropDownVisibility]);

  const outsideClickRef = React.useRef();

  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        outsideClickRef.current &&
        !outsideClickRef.current.contains(event.target)
      ) {
        setDropDownVisibility("none");
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [outsideClickRef]);

  /*Having 2 outer divs for dropdown has automatically made it close the modal once you click elsewhere since the click on links is outside the div*/

  return (
    <nav className={styles.nav}>
      <ul>
        {list.map((item, id) => (
          <li key={id}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        <div ref={outsideClickRef} className={styles.dropdown}>
          <MenuIcon
            style={dropDownIconOrientation}
            className={styles.dropbtn}
            onClick={toggleDropDown}
          />
        </div>
        <div
          style={{ display: dropDownVisibility }}
          className={styles.dropdownContent}
        >
          {list.map((item, id) => (
            <Link to={item.link}>{item.name}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
