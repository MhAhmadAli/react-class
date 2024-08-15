import React, { useState } from 'react'

function MyForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const [carsList, setCarsList] = useState([
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Fiat' },
    { id: 4, name: 'Audi' },
    { id: 5, name: 'Toyota'},
  ]);

  return (
    <div>
      <div>My Form</div><br />
      <form onSubmit={(e) => {
        e.preventDefault();

        console.log(name, email)
      }}>
        <label for="name">Name: </label>
        <input id='name'
          type="password"
          onChange={(e) => {
            setName(e.target.value)
          }} /><br />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value)
          }} /><br />
        <label for="cars">Choose a car:</label>
        <select id="cars" name="cars">
          {carsList.map((car) => {
            return <option value={car.name}>{car.name.toUpperCase()}</option>
          })}
        </select><br />
        <textarea cols='20' rows='10'></textarea><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default MyForm;