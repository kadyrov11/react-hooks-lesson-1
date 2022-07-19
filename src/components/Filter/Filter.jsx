import styles from './Filter.module.css'
import shortid from 'shortid'

const Filter = ({ label, value, onChange }) => {
    const ID = shortid.generate();

    return(
    <>
        <label htmlFor={ID} className={styles.title} >{label}</label>
        <input type="text" id={ID} value={value} onChange={onChange} className={styles.input} />
        </>
    )
};

export default Filter;