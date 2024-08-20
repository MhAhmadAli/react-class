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
    "first_name": "Vanny",
    "last_name": "Flude",
    "email": "vflude0@printfriendly.com",
    "gender": "Female"
  }, {
    "id": 2,
    "first_name": "Theodore",
    "last_name": "Daingerfield",
    "email": "tdaingerfield1@miibeian.gov.cn",
    "gender": "Male"
  }, {
    "id": 3,
    "first_name": "Sophronia",
    "last_name": "Pauley",
    "email": "spauley2@163.com",
    "gender": "Female"
  }, {
    "id": 4,
    "first_name": "Lita",
    "last_name": "Stallan",
    "email": "lstallan3@blog.com",
    "gender": "Female"
  }, {
    "id": 5,
    "first_name": "Kelley",
    "last_name": "Sinnett",
    "email": "ksinnett4@com.com",
    "gender": "Male"
  }, {
    "id": 6,
    "first_name": "Devi",
    "last_name": "Bouldon",
    "email": "dbouldon5@uol.com.br",
    "gender": "Polygender"
  }, {
    "id": 7,
    "first_name": "Northrop",
    "last_name": "Gitting",
    "email": "ngitting6@lulu.com",
    "gender": "Male"
  }, {
    "id": 8,
    "first_name": "Heinrick",
    "last_name": "Rodden",
    "email": "hrodden7@51.la",
    "gender": "Male"
  }, {
    "id": 9,
    "first_name": "Drusi",
    "last_name": "Goldsby",
    "email": "dgoldsby8@hugedomains.com",
    "gender": "Female"
  }, {
    "id": 10,
    "first_name": "Binni",
    "last_name": "Howsley",
    "email": "bhowsley9@oracle.com",
    "gender": "Polygender"
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
                  return <td key={index}>{outerItem[innerItem]}</td>
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