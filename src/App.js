import './App.css';
import React, { useState } from "react";
import fullContacts from './contacts.json';

let contactsList = [...fullContacts];
let initialContacts = contactsList.slice(0, 5);

let trophy = '🏆';

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const addRandomContact = () => {
    const copyOfContacts = [...contacts];
    // console.log('copyOfContacts.length :', copyOfContacts.length)
    const slicedContacts = contactsList.slice(copyOfContacts.length);

    if (slicedContacts.length > 0) {
      // console.log('slicedContacts.length :', slicedContacts.length)
      let randomContactIndex = Math.floor(Math.random() * slicedContacts.length);
      let randomContact = slicedContacts[randomContactIndex];

      let filteredContacts = contactsList.filter(function(contact) {
        return contact !== randomContact
      });

      contactsList = [...filteredContacts]
      copyOfContacts.push(randomContact);
      setContacts(copyOfContacts);
    }
  }

  const sortByName = () => {
    const copyOfContacts = [...contacts];
    copyOfContacts.sort((a, b) => (a.name > b.name) ? 1 : -1);
    setContacts(copyOfContacts);
  }

  const sortByPopularity = () => {
    const copyOfContacts = [...contacts];
    copyOfContacts.sort((a, b) => (a.popularity > b.popularity) ? 1 : -1);
    //console.log('SORT BY NAME :', copyOfContacts)
    setContacts(copyOfContacts);
  }

  const deleteContact = (id) => {
    const filtered = contacts.filter(function(contact) {
      //console.log('DELETE CONTACT :', contact.id)
      return contact.id !== id
    });
    console.log("FILTERED", filtered)
    setContacts(filtered);
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
          onClick={(Contacts) => sortByPopularity()}
          className='sortByPopularity'>
          Sort by popularity
        </button>
        <button
          onClick={(Contacts) => sortByName()}
          className='sortByName'>
          Sort by name
        </button>
      </div>
      <table
        style={{
          border: '1px solid black',
          borderCollapse: 'collapse',
          width: '60vw'
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
            <th scope='col'>Won Emmy</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, i) => {
            return (
              <tr className='contact' key={i}>
                <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                <td>{contact.name}</td>
                <td>{Number.parseFloat(contact.popularity).toFixed(2)}</td>
                <td>{contact.wonOscar && trophy}
                  {/* {conditionIsTrue ? "TROPHEE" : ""} */}
                </td>
                <td>{contact.wonEmmy && trophy}</td>
                <td>
                  <button
                    onClick={() => deleteContact(contact.id)}
                    className='deleteContact'
                  >
                    Delete
                  </button>
                </td>
              </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
