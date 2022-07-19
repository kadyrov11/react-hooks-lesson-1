import { useEffect, useState } from 'react';

import Section from './components/Section'
import Form from './components/Form'
import ContactList from './components/ContactList';
import Filter from './components/Filter'

// import {initialState} from './initialState'

import shortid from 'shortid'
import React from 'react'

function App() {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')

  const FILTER = filter.toLocaleLowerCase()

  const filteredContacts = contacts.filter(({ name, number }) => name.toLocaleLowerCase().includes(FILTER) || number.includes(FILTER))

  const addContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name: name,
      number: number
    }
    
    const alreadyInContacts = contacts.find(({ name }) => name.toLowerCase() === newContact.name.toLowerCase())
    
    if (alreadyInContacts) {
      alert(`${newContact.name} is already in contacts`)
    } else {
      setContacts([newContact,...contacts ])
    }
  }

  const changeFilter = ({ target }) => {
    setFilter(target.value)
  }

  const onDelete = (idx) => {
    const newList = [...contacts];
    // newList.splice(idx, 1);
    const result = newList.filter((_, index) => index !== idx);
    setContacts(result)
  }

  useEffect(() => {
    const allContacts = localStorage.getItem('contacts')
    
    if (allContacts) {
      const contacts = JSON.parse(allContacts)
      setContacts(contacts)
    }
    console.log('это useEffect(componentDidMount) ')

  }, [])
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))

    return console.log('Это возврат useEffect(componentDidUpdate) ')
  }, [contacts])  
  
  //     componentDidUpdate(prevProps, prevState) {
//       if (this.state.contacts !== prevState.contacts) {
//         localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//       }
//     }

  return (
    <>
      <Section title="PhoneBook">
        <Form onSubmit={addContact}/>
      </Section>
        <Section title="Contacts">
          {contacts.length ?
          <>
          <Filter label='Find contact by name or number :' value={filter} onChange={changeFilter}/>
            <ContactList contacts={filteredContacts} onClick={onDelete} />
            </> : <p style={{
              fontSize: '25px',
              textAlign: 'center',
              color:'orange',
          }}>There is no contact</p>}
      </Section>
    </>
  )
}

export default App

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: ''
//   }

//   addContact = ({ name, number }) => {
//     const newContact = {
//       id: shortid.generate(),
//       name: name,
//       number: number
//     }
        
//     this.setState(({ contacts }) => {
//       const alreadyInContacts = contacts.find(({ name }) => name.toLowerCase() === newContact.name.toLowerCase())
//       if (alreadyInContacts) {
//         alert(`${newContact.name} is already in contacts`)
//         return {
//           contacts
//         }
//       }
//       newContact.id = shortid.generate()
//       return {
//         contacts: [...contacts, newContact]
//       }
//     })
//   }

//   changeFilter = ({target}) => {
//     this.setState({
//       filter: target.value
//     })
//   }
 
  // onDelete = (idx) => {
  //   this.setState(({ contacts }) => {
  //     const newList = [...contacts];
  //     newList.splice(idx, 1);
  //     // const result = newList.filter((_, index)=> index !== idx);
  //     return { contacts: newList }
  //   }
  //   )};

//     componentDidMount() {
//       const allContacts = localStorage.getItem('contacts')

//       if (allContacts) {
//        const contacts = JSON.parse(allContacts)

//        this.setState({ contacts }) 
//       }
//     }
  
//     componentDidUpdate(prevProps, prevState) {
//       if (this.state.contacts !== prevState.contacts) {
//         localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//       }
//     }
  
//   render() {
//     const { contacts, filter } = this.state
//     const {addContact, changeFilter, onDelete} = this

//     const FILTER = filter.toLocaleLowerCase()

//     const filteredContacts = contacts.filter(({ name, number }) => name.toLocaleLowerCase().includes(FILTER) || number.includes(FILTER))


//     return (
//       <>
//       <Section title="PhoneBook">
//         <Form onSubmit={addContact}/>
//       </Section>
//         <Section title="Contacts">
//           {contacts.length ?
//           <>
//           <Filter label='Find contact by name or number :' value={filter} onChange={changeFilter}/>
//             <ContactList contacts={filteredContacts} onClick={onDelete} />
//             </> : <p style={{
//               fontSize: '25px',
//               textAlign: 'center',
//               color:'orange',
//           }}>There is no contact</p>}
//       </Section>
//       </>
//     )
//   }
// }

// export default App;