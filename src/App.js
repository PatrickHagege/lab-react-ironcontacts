import './App.css';
import React, { useState } from "react";
import fullContacts from './contacts.json';

let initialContacts = fullContacts.slice(0, 5);

let trophy = '🏆';

console.log("avant app js", initialContacts);

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const addRandomContact = () => {
    const copyOfContacts = [...contacts];
    const slicedContacts = fullContacts.slice(copyOfContacts.length);
    let randomContactIndex = Math.floor(Math.random() * slicedContacts.length);
    let randomContact = slicedContacts[randomContactIndex];
    copyOfContacts.push(randomContact);
    setContacts(copyOfContacts);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div>
    <button
          onClick={(Contacts) => addRandomContact()}
          className='addRandomContact'
          >
          Add Random Contact
        </button>
        <button
          // onClick={(Contacts) => sortByPopularity()}
          className='sortByPopularity'>
          Sort by popularity
        </button>
        <button
          // onClick={(Contacts) => sortByName()}
          className='sortByName'>
          Sort by name
        </button>
      </div>
      <table
        style={{
          border: '1px solid black',
          borderCollapse: 'collapse',
          width:'60vw'
        }}
        cellSpacing="0"
        cellPadding="0"
        className="Contacts"
      >
        <thead>
          <tr>
            <th scope='col'>Picture</th>
            <th scope='col'>Name</th>
            <th scope='col'>Popularity</th>
            <th scope='col'>Won Oscar</th>
            <th
              style={{
                border: '1px solid black',
                padding: '1rem'
              }}
              scope='col'>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr className='contact'>
                <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                <td>{contact.name}</td>
                <td>{Number.parseFloat(contact.popularity).toFixed(2)}</td>
                <td>{contact.wonOscar && trophy}
                  {/* {conditionIsTrue ? "TROPHEE" : ""} */}
                </td>
                <td>{contact.wonEmmy && trophy}</td>
              </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;