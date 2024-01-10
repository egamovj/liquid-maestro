import React from 'react'
import styles from './Contact.module.css';
import Image from 'next/image';
import B from '../../assets/images/B.png'
import Calendar from '../../assets/images/Calendar.png'

const Contact = () => {
  return (
    <div className={styles.contact}>
        <Image src={B} alt='B'/>
        <div className={styles.wrapper}>
            <h3>Bookings & Contact</h3>
            <form className={styles.form}>
                <div className={styles.forms}>
                    Name
                    <input type="text" placeholder='Name' />
                </div>
                <div className={styles.forms}>
                    Email
                    <input type='email' placeholder='Email' />
                </div>
                <div className={styles.forms}>
                    Phone
                    <input type='text' placeholder='Phone' />
                </div>
                <div className={styles.forms}>
                    Number of people
                    <input type='number' placeholder='Number of people' />
                </div>
            </form>
            <p>Date & Time</p>
            <Image src={Calendar} alt='Calendar'/>
            <button>Submit</button>
        </div>
    </div>
  )
}

export default Contact