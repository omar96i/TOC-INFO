import React, { useState } from "react";
import "./PhoneInput.scss";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

const PhoneInput = ({ setWhatsapp }) => {
  const [number, setNumber] = useState("");
  const countries = [
    "us",
    "au",
    "al",
    "ad",
    "at",
    "by",
    "be",
    "ba",
    "bg",
    "hr",
    "cz",
    "dk",
    "ee",
    "fo",
    "fi",
    "fr",
    "de",
    "gi",
    "gr",
    "va",
    "hu",
    "is",
    "ie",
    "it",
    "lv",
    "li",
    "lt",
    "lu",
    "mk",
    "mt",
    "md",
    "mc",
    "me",
    "nl",
    "no",
    "pl",
    "pt",
    "ro",
    "ru",
    "sm",
    "rs",
    "sk",
    "si",
    "es",
    "se",
    "ch",
    "ua",
    "gb",
    "ca",
    "br",
    "mx",
    "cl",
    "ar",
    "co",
    "pa",
    "pe",
    "uy",
    "do",
    "pr",
    "cr",
    "ve",
    "ec",
    "gt",
    "bb",
    "bo",
    "sv",
    "py",
    "tt",
    "bz",
    "hn",
    "ni",
    "gd",
    "gy",
    "cu",
    "dm",
    "sr",
    "ht",
  ];

  return (
    <IntlTelInput
      // preferredCountries={["co"]}
      value={number}
      containerClassName="intl-tel-input"
      inputClassName="form-control"
      defaultCountry="co"
      autoPlaceholder={false}
      placeholder="Whatsapp"
      fieldName="whatsapp"
      fieldId="whatsapp"
      onlyCountries={countries}
      onPhoneNumberChange={(valid, number, country) => {
        setNumber(number.replace(/[^0-9]/g, ""));
        setWhatsapp({
          valid: valid,
          code: country.dialCode,
          value: number.replace(/[^0-9]/g, ""),
        });
      }}
    />
  );
};

export default PhoneInput;
