import { useSelector } from 'react-redux';
import styles from './Footer.module.css';

const Categories = () => {
    const categories = useSelector(({ categoryState }) => categoryState.allCategories);

    const renderCategories = () => {
        return categories.map(
            cat => cat.order <= 5 ?
                <div key={cat.order}>
                    <h4>{cat.title.toUpperCase()}</h4>
                    <ul>
                        {cat.subCategories.map(
                            subCat => <li key={subCat}>{ subCat }</li>
                        ) }
                    </ul>
                </div> : ""
        );
    }

    if (categories) return (
        <div className={styles.cats_main_container}>
            {renderCategories()}
            
        </div>
    );
}

export default Categories;