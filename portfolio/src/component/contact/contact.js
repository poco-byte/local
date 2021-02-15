import React from 'react'
import styles from './contact.scss';
import Footer from './footer/footer';
import Peers from './peers/peers';


export default function Bottom() {
    return (
        <div className={styles['container']}>
            <div className={styles['wrapper']}>
                <Peers />
            </div>
            <div className={styles['footer']}>
                <Footer />
            </div>
            
        </div>
    )
}
