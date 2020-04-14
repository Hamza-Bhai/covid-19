import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import Styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fCountries, setFCountries] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setFCountries(await fetchCountries());
    };
    fetchApi();
  }, [setFCountries]);
  return (
    <FormControl className={Styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
