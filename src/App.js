import React, { useState  } from 'react';
import axios from 'axios';
import './App.css';



function App() {
  const [name, setName] = useState("");
  // const [schools,setSchools] = useState([]);

  const options = [
    {id: 1, label: 'Usa', value: 'USA' },
    {id: 2, label: 'Canada', value: 'Canada' },
    {id: 3, label: 'England', value: 'England'}
  ]
  const [country, setCountry] = useState("USA");

  const handleCountry = (event) => {
    setCountry(event.target.value);
  }

  function handleChange(event){
    setName(event.target.value);
    console.log(name);
  }

  function handleUrl(event) {
    event.preventDefault();
    axios.get(`http://universities.hipolabs.com/search?name=${name}&country=${country}`)
        .then(res => {
          this.setSchools(res.data);
        })
        .catch(error => {
          console.log(error)
        })
  }

  return (
    <div className="container">
      <h1>Hipo Api App</h1>      
      <div className='input'>      
        <label>University Name: </label>
        <input 
          onChange={handleChange}
          type="text"
          value={name} 
          className="input"
        />
      </div>

      <div className='searchBox'>
        <label>Select a Country: </label>
        <select className='selectBox' value={country}
          onChange={handleCountry}>
            {options.map((options) => (
              <option key={options.id} value={options.value}>{options.label}</option>
            ))}
        </select>
      </div>      
     
      <button type='submit' onClick={handleUrl}>Submit</button>
      <div>
              <br/>
        <h3>List Of Universities </h3> 
      </div>        
      


    </div>
  );
}

export default App;
