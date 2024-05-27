import React, { useState } from 'react';
import Select from 'react-select';

function SelectTags({tags, onHandleChange}) {


  // set value for default selection
  const [selectedValue, setSelectedValue] = useState([]);

  // handle onChange event of the dropdown
//   const handleChange = (e) => {
//     setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
//   }

  const formattedTags = tags.map(tag => ({
    value: tag.name,
    label: tag.name
  }));

  console.log(selectedValue);
  return (
    <div className="App">


      <Select
        className="dropdown"
        type='checkbox'
        placeholder="Select Tag"
        value={formattedTags.filter(obj => selectedValue.includes(obj.value))} // set selected values
        options={formattedTags} // set list of the data
        onChange={onHandleChange} // assign onChange function
        isMulti
        isClearable
      />


    </div>
  );
}

export default SelectTags;
