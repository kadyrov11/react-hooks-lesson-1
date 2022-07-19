import { useState } from 'react'
import styles from './Form.module.css'


import React from 'react'

function Form({onSubmit}) {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    
    const handleChange = (e) => {
    const {name, value} = e.target
    
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
    }
    
    const reset = () => {
        setName('')
        setNumber('')
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({name , number})
        reset()
    }
    

  return (
    <form id="form" onSubmit={handleSubmit}>    
        <label htmlFor="name" className={styles.label} required>Name</label>
            <input pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                onChange={handleChange} value={name} name="name" type="text" id="name" className={styles.input} required />
        <label htmlFor="number" className={styles.label}>Number</label>
            <input
                    value={number}
                    name="number"
                    onChange={handleChange}
                    className={styles.input}
                    type="tel"
                    id="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                />
        <button className={styles.btn}>Add contact</button>
    </form>  
  )
}

export default Form

// class Form extends Component {
//     state = {
//         name: '',
//         number: ''
//     }
    
//     handleChange = ({ target }) => {
//         const {name, value} = target

//         this.setState({
//             [name]: value,
//         })
//     }
//     handleSubmit = (e) => {
//         e.preventDefault()
//         const { onSubmit } = this.props
//         onSubmit(this.state)
//         this.reset()
//     }
//     reset = () => {
//         this.setState({
//             name: '',
//             number: ''
//         })
//     }

//     render() {
//         const {handleSubmit, handleChange} = this
//         return (
//             <>
//             <form id="form" onSubmit={handleSubmit}>
//                 <label htmlFor="name" className={styles.label} required>Name</label>
//                     <input pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//                         onChange={handleChange} value={this.state.name} name="name" type="text" id="name" className={styles.input} required />
//                 <label htmlFor="number" className={styles.label}>Number</label>
//                     <input
//                          value={this.state.number}
//                          name="number"
//                          onChange={handleChange}
//                          className={styles.input}
//                          type="tel"
//                          name="number"
//                          id="number"
//                          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//                          required
//                         />
//                 <button className={styles.btn}>Add contact</button>
//             </form>
//             </>
//         )
//     }
// }

// export default Form;

