import React, { useEffect, useState } from 'react'
import './MyList.css';

function MyList() {
  let [data, setData] = useState([
    'coffee',
    'apple',
    'coke',
    'marker'
  ]);

  let [keys, setKeys] = useState([]);

  let [objList, setObjList] = useState([{
    "id": 1,
    "first_name": "Sapphira",
    "last_name": "Kirsz",
    "email": "skirsz0@ameblo.jp",
    "gender": "Female",
    "is_married": true
  }, {
    "id": 2,
    "first_name": "Antony",
    "last_name": "Avon",
    "email": "aavon1@engadget.com",
    "gender": "Genderqueer",
    "is_married": true
  }, {
    "id": 3,
    "first_name": "Barbe",
    "last_name": "Turton",
    "email": "bturton2@illinois.edu",
    "gender": "Female",
    "is_married": false
  }, {
    "id": 4,
    "first_name": "Pasquale",
    "last_name": "Rogerson",
    "email": "progerson3@zimbio.com",
    "gender": "Male",
    "is_married": true
  }, {
    "id": 5,
    "first_name": "Claretta",
    "last_name": "Tiffin",
    "email": "ctiffin4@sohu.com",
    "gender": "Female",
    "is_married": false
  }, {
    "id": 6,
    "first_name": "Wilone",
    "last_name": "Hooban",
    "email": "whooban5@howstuffworks.com",
    "gender": "Female",
    "is_married": false
  }, {
    "id": 7,
    "first_name": "Felike",
    "last_name": "Bambery",
    "email": "fbambery6@imdb.com",
    "gender": "Male",
    "is_married": true
  }, {
    "id": 8,
    "first_name": "Carolee",
    "last_name": "Wadley",
    "email": "cwadley7@nsw.gov.au",
    "gender": "Female",
    "is_married": true
  }, {
    "id": 9,
    "first_name": "Dorothee",
    "last_name": "Hinrichs",
    "email": "dhinrichs8@sciencedaily.com",
    "gender": "Female",
    "is_married": false
  }, {
    "id": 10,
    "first_name": "Margi",
    "last_name": "Pethybridge",
    "email": "mpethybridge9@addthis.com",
    "gender": "Female",
    "is_married": false
  }]);

  useEffect(() => {
    let temp = Object.keys(objList[0]);
    // console.log(temp)
    setKeys(temp);
  }, []);

  return (
    <div>
      <ol>
        {data.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ol>
      <select>
        {data.map((item, index) => {
          return <option key={index}>{item}</option>
        })}
      </select>
      <ul>
        {objList.map((item) => {
          return <li key={item.id}>{item.id} {item.first_name} {item.last_name} {item.email} {item.gender}</li>
        })}
      </ul>

      <table>
        <thead>
          <tr>
            {keys.map((item, index) => {
              return <th key={index}>{item}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {objList.map((outerItem, index) => {
            return (
              <tr key={index}>
                {keys.map((innerItem, index) => {
                  return <td key={index}>{typeof (outerItem[innerItem]) == 'boolean' ? outerItem[innerItem] ? "true" : "false" : outerItem[innerItem]}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr/>
      <table>
        <thead>
          <tr>
            {keys.map((item, index) => {
              return <th key={index}>{item}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {objList.map((outerItem, index) => {
            return (
              <tr key={index}>
                {keys.map((innerItem, index) => {
                  return <td key={index}>{innerItem == 'is_married' ? outerItem[innerItem] ? "Married" : "Single" : outerItem[innerItem]}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default MyList