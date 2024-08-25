"use client";

import React, { useState, useEffect, useRef } from "react";
import { useStateContext } from "../context/StateContextProvider";
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiFillShopping,
  AiFillPlusCircle,
  AiOutlineDown,
  AiOutlineCaretDown,
  AiOutlineCaretUp,
} from "react-icons/ai";

function CustomDropdown({ Options, name, selectedValue, OnChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  //   const [filters, setFilters] = useState([]);
  const { filters, setFilters } = useStateContext();

  const addfilters = (option) => {
    const checkfilters = filters.find((filter) => filter.option === option);

    if (checkfilters) {
      setFilters(filters);
    } else {
      setFilters([...filters, { option }]);
    }

    setSelectedOption(option);
    setIsOpen(false);

    console.log(filters);
  };

  let dropdownRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div ref={dropdownRef} className="dropdown">
      <button className="filters" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption : name}
        {!isOpen ? (
          <AiOutlineCaretDown className="AiOutlineDown" />
        ) : (
          <AiOutlineCaretUp className="AiOutlineDown" />
        )}
      </button>

      {isOpen && (
        <ul className="list">
          {Options.map((option) => (
            <li key={option.value} onClick={() => addfilters(option.value)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomDropdown;
