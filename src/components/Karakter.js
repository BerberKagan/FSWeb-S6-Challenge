import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

const Karakter = () => {
  const [useData, setUseData] = useState([]);
  const [open, setOpen] = useState("0");

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/?page=")
      .then((response) => {
        setUseData(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Accordion">

      <Accordion open={open} toggle={toggle}>
        {useData
          .map((item, index) => (
            <AccordionItem>
              <AccordionHeader targetId={index.toString()}>
                {item.name}
              </AccordionHeader>
              <AccordionBody accordionId={index.toString()}>
                <p>Gender: {item.gender}</p>
                <p>Height: {item.height}</p>
                <p>Mass: {item.mass}</p>
                <p>BirthYear: {item.birth_year}</p>
                <p>HairColor: {item.hair_color}</p>
                <p>EyeColor: {item.eye_color}</p>
                <p>SkinColor: {item.skin_color}</p>
              </AccordionBody>
            </AccordionItem>
          ))}
      </Accordion>
      
    </div>
  );
};
export default Karakter;
