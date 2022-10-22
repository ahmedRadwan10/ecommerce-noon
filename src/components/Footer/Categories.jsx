import { useSelector } from 'react-redux';
import styles from './Footer.module.css';

const Categories = () => {
    const categories = useSelector(({ categoryState }) => categoryState.categories);

    const renderCategories = () => {
        return categories.map(
            cat => {
                if (cat.order <= 5) {
                    let subCategoriesObj = cat.__collections__.subCategories;
                    return <div key={cat.order}>
                                <h4>{cat.title.toUpperCase()}</h4>
                                <ul>
                                    {Object.keys(subCategoriesObj).map(
                                        subKey => <li key={subKey}>{subCategoriesObj[subKey].title}</li>
                                    )}
                                </ul>
                            </div>
                }
        });
    }

    if (categories) return (
        <>
            <div className={styles.cats_main_container}>
                {renderCategories()}
            </div>
            <div className={styles.social_info_container}>
                <div className={styles.apps_container}>
                    <h5>SHOP ON THE GO</h5>
                    <div className={styles.apps}>
                        <img src="/data/assets/svg/app-store.svg" alt="App Store" />
                        <img src="/data/assets/svg/google-play.svg" alt="Google Play" />
                    </div>
                </div>
                <div className={styles.social_container}>
                    <h5>CONNECT WITH US</h5>
                    <div className={styles.socials}>
                        <img src="/data/assets/svg/facebook.svg" alt="Facebook" />
                        <img src="/data/assets/svg/twitter.svg" alt="Twitter" />
                        <img src="/data/assets/svg/instagram.svg" alt="Instagram" />
                        <img src="/data/assets/svg/linkedin.svg" alt="Linkedin" />
                    </div>
                </div>
            </div>
            <div className={styles.more_info_container}>
                <p>© 2022 noon. All Rights Reserved</p>
                <div className={styles.paymnets}>
                    <img src="/data/assets/svg/mastercard-color.svg" alt="Master Card" />
                    <img src="/data/assets/svg/visa-color.svg" alt="Visa" />
                    <img src="/data/assets/svg/cash-color.svg" alt="Cash" />
                    <img src="/data/assets/svg/amex-color.svg" alt="American Expresss" />
                </div>
                <ul className={styles.more_links}>
                    <li>Careers</li>
                    <li>Warranty Policy</li>
                    <li>Sell with us</li>
                    <li>Terms of use</li>
                    <li>Terms of sale</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
        </>
    );
}

export default Categories;