//import Child1 from "./components/Child1"
//import Child2 from "./components/Child2"
//import Childcls from "./components/Childcls"
//import Child3 from "./components/Child3"
//import Incre from "./components/Incre"
//import Logo from "./components/Logo"//
//import State from "./components/State"
//import ClassProps from "./components/ClassProps"
//import List from "./components/List"
//import Statecls from "./components/Statecls"
//import PropsChildren from "./components/PropChildren"
//mport A from "./components/A"
//import Lists from "./components/Lists"
//import Style1 from "./components/Style1"
//import Navbar from "./components/Navbar
//import Navbar from "./components/Navbar"
//import Navbar from "./components/Navbar"
//import useState1 from "./components/Usestate1"
//import Tcs from "./components/tcs.module.css"
//import "./global.css"
//import Style2 from "./components/Style2"
//import Style3 from "./components/Style3"
//import Inline from "./components/Inline"
//import Img from "./components/Img"

//import Main from "./Hooks/Main"//

//import Controlled from "./components/Controlled"
//import Amazon from "./components/Amazon"
//import Navbar from "./components/Navbar"
//import Tcs from "./components/Tcs"
//import Navbar from "./components/Navbar"
//import Zee5 from "./components/Zee5"
//import Navbar from "./components/Navbar"
//import Platform from "./components/Plaftform"
//import Godaddy from "./components/Godaddy"
//import Useeffect from "./Hooks/Useeffect"
//import X from "./Hooks/X"
//import {createContext} from "react"


//import Uncontrolled from "./components/Uncontrolled";
//import Xml from "./components/Xml"
 //export let userData=createContext()
 //import React, { useState } from "react";
 import React, { useState } from 'react';
import PropertyList from './PropertyList';
import PropertyDetail from './PropertyDetail';

const allProperties = [
  {
    id: 1,
    location: 'New York',
    type: 'Single Family Home',
    price: '$500,000',
    image: 'https://example.com/property1.jpg',
    description: 'This beautiful home has 4 bedrooms and 3 bathrooms.',
  },
  {
    id: 2,
    location: 'San Francisco',
    type: 'Condo',
    price: '$250,000',
    image: 'https://example.com/property2.jpg',
    description: 'This cozy condo has 1 bedroom and 1 bathroom.',
  },
  // additional property objects here
];

const App = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
  };

  return (
    <div>
      <h1>Properties for Sale</h1>
      <PropertyList properties={allProperties} onPropertySelect={handlePropertySelect} />
      {selectedProperty && <PropertyDetail property={selectedProperty} />}
    </div>
  );
};

export default App;
