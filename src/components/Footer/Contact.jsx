import React from 'react';
import styles from './Footer.module.css';

const Contact = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.contact_container}>
                <div className={styles.contact_header_container}>
                    <div className={styles.contact_header_text}>
                        <h2>We're Always Here To Help</h2>
                        <p>Reach out to us through any of these support channels</p>
                    </div>
                    <div className={styles.contact_header_info_container}>
                        <div className={styles.contact_header_info}>
                            <div><i className="fas fa-question"></i></div>
                            <div className={styles.contact_header_info_text}>
                                <h5>HELP CENTER</h5> 
                                <span role="contact-info">help.noon.com</span>
                            </div>
                        </div>
                        <div className={styles.contact_header_info}>
                            <div><i className="far fa-envelope"></i></div>
                            <div className={styles.contact_header_info_text}>
                                <h5>EMAIL SUPPORT</h5> 
                                <span role="contact-info">egypt@noon.com</span>
                            </div>
                        </div>
                        <div className={styles.contact_header_info}>
                            <div><i className="fas fa-phone-alt"></i></div>
                            <div className={styles.contact_header_info_text}>
                                <h5>PHONE SUPPORT</h5> 
                                <span role="contact-info">16358</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
}

export default Contact;