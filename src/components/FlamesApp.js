// App.js
import React, { useState } from "react";

const FlamesApp = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [relationship, setRelationship] = useState("");

  const handleNameChange = (e, setName) => {
    setName(e.target.value);
  };

  const calculateRelationship = () => {
    const name1Chars = name1.toLowerCase().split("");
    const name2Chars = name2.toLowerCase().split("");

    let remainingChars = [];

    name1Chars.forEach((char) => {
      const index = name2Chars.indexOf(char);
      if (index !== -1) {
        name2Chars.splice(index, 1);
      } else {
        remainingChars.push(char);
      }
    });

    name2Chars.forEach((char) => {
      remainingChars.push(char);
    });

    const remainingLength = remainingChars.length % 6;

    switch (remainingLength) {
      case 1:
        setRelationship("Friends");
        break;
      case 2:
        setRelationship("Love");
        break;
      case 3:
        setRelationship("Affection");
        break;
      case 4:
        setRelationship("Marriage");
        break;
      case 5:
        setRelationship("Enemy");
        break;
      case 0:
        setRelationship("Siblings");
        break;
      default:
        setRelationship("Please enter valid input");
    }
  };
  const clearForm = () => {
    setName1("");
    setName2("");
    setRelationship("");
  };

  return (
    <div className="App">
      <input
        type="text"
        value={name1}
        onChange={(e) => handleNameChange(e, setName1)}
        data-testid="input1"
        placeholder="Enter first Name"
      />
      <input
        type="text"
        value={name2}
        onChange={(e) => handleNameChange(e, setName2)}
        data-testid="input2"
        placeholder="Enter second Name"
      />
      <button
        onClick={calculateRelationship}
        data-testid="calculate_relationship"
      >
        Calculate Relationship Future
      </button>
      <button onClick={clearForm} data-testid="clear">
        Clear
      </button>
      <h3 data-testid="answer">{relationship}</h3>
    </div>
  );
};

export default FlamesApp;
