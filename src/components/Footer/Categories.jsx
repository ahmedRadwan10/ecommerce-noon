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
                        <img src="https://f.nooncdn.com/s/app/com/common/images/logos/app-store.svg" alt="App Store" />
                        <img src="https://f.nooncdn.com/s/app/com/common/images/logos/google-play.svg" alt="Google Play" />
                    </div>
                </div>
                <div className={styles.social_container}>
                    <h5>CONNECT WITH US</h5>
                    <div className={styles.socials}>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48dGl0bGUgaWQ9InRpdGxlIj5mb290ZXJfZmJfY29sb3I8L3RpdGxlPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAxMkMwIDUuMzczIDUuMzczIDAgMTIgMHMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMlMwIDE4LjYyNyAwIDEyeiIgZmlsbD0iI0ZFRUUwMCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuOTkgMTguNjY3di02LjMzNGgxLjc3NUwxNSAxMC4xNWgtMi4wMWwuMDAzLTEuMDkzYzAtLjU2OS4wNTUtLjg3NC44ODUtLjg3NGgxLjExVjZoLTEuNzc2QzExLjA4IDYgMTAuMzMgNy4wNTkgMTAuMzMgOC44NHYxLjMxSDl2Mi4xODNoMS4zM3Y2LjMzNGgyLjY2eiIgZmlsbD0iIzQwNDU1MyIvPjwvc3ZnPg==" alt="Facebook" />
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48dGl0bGUgaWQ9InRpdGxlIj5mb290ZXJfdHdpdHRlcl9jb2xvcjwvdGl0bGU+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDEyLjEyNEMwIDUuNTY2IDUuMzA0LjI1IDExLjg0Ni4yNXMxMS44NDYgNS4zMTcgMTEuODQ2IDExLjg3NWMwIDYuNTYtNS4zMDQgMTEuODc2LTExLjg0NiAxMS44NzZTMCAxOC42ODMgMCAxMi4xMjR6IiBmaWxsPSIjRkVFRTAwIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi4wODMgMTAuNDk1bC4wMjUuNDExLS40MTQtLjA1Yy0xLjUwOC0uMTkzLTIuODI2LS44NDctMy45NDQtMS45NDZsLS41NDctLjU0NS0uMTQxLjQwM2MtLjI5OC44OTctLjEwOCAxLjg0NS41MTQgMi40ODIuMzMxLjM1Mi4yNTcuNDAzLS4zMTUuMTkzLS4xOTktLjA2Ny0uMzczLS4xMTctLjM5LS4wOTItLjA1OC4wNTguMTQxLjgyMS4yOTkgMS4xMjMuMjE1LjQyLjY1NC44MyAxLjEzNSAxLjA3NGwuNDA2LjE5My0uNDguMDA4Yy0uNDY1IDAtLjQ4MS4wMDgtLjQzMi4xODUuMTY2LjU0NS44MiAxLjEyMyAxLjU1IDEuMzc1bC41MTQuMTc2LS40NDguMjY4YTQuNjU3IDQuNjU3IDAgMDEtMi4yMi42MjFjLS4zNzMuMDA4LS42OC4wNDItLjY4LjA2NyAwIC4wODQgMS4wMTEuNTUzIDEuNi43MzggMS43NjQuNTQ1IDMuODYuMzEgNS40MzUtLjYyIDEuMTE4LS42NjMgMi4yMzctMS45OCAyLjc2LTMuMjU0LjI4LS42OC41NjMtMS45Mi41NjMtMi41MTYgMC0uMzg2LjAyNC0uNDM2LjQ4OC0uODk4LjI3NC0uMjY4LjUzLS41NjEuNTgtLjY0NS4wODMtLjE2LjA3NS0uMTYtLjM0OC0uMDE3LS43MDQuMjUyLS44MDMuMjE4LS40NTUtLjE2LjI1Ni0uMjY4LjU2My0uNzU0LjU2My0uODk3IDAtLjAyNS0uMTI0LjAxNy0uMjY1LjA5My0uMTUuMDgzLS40OC4yMS0uNzMuMjg1bC0uNDQ3LjE0Mi0uNDA2LS4yNzZjLS4yMjMtLjE1MS0uNTM4LS4zMi0uNzA0LS4zNy0uNDIyLS4xMTctMS4wNjktLjEtMS40NS4wMzQtMS4wMzYuMzc3LTEuNjkgMS4zNS0xLjYxNiAyLjQxNXoiIGZpbGw9IiM0MDQ1NTMiLz48L3N2Zz4=" alt="Twitter" />
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48dGl0bGUgaWQ9InRpdGxlIj5mb290ZXJfaW5zdGFncmFtX2NvbG9yPC90aXRsZT48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMTJDMCA1LjM3MyA1LjM2IDAgMTEuOTcgMHMxMS45NyA1LjM3MyAxMS45NyAxMi01LjM2IDEyLTExLjk3IDEyUzAgMTguNjI3IDAgMTJ6IiBmaWxsPSIjRkVFRTAwIi8+PG1hc2sgaWQ9ImEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDEyQzAgNS4zNzMgNS4zNiAwIDExLjk3IDBzMTEuOTcgNS4zNzMgMTEuOTcgMTItNS4zNiAxMi0xMS45NyAxMlMwIDE4LjYyNyAwIDEyeiIgZmlsbD0iI2ZmZiIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2EpIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjk3IDUuNmMtMS43MzMgMC0xLjk1LjAwOC0yLjYzMi4wMzktLjY4LjAzLTEuMTQzLjEzOS0xLjU1LjI5Ny0uNDIuMTYzLS43NzUuMzgyLTEuMTMuNzM4YTMuMTQzIDMuMTQzIDAgMDAtLjczNyAxLjEzNGMtLjE1OC40MDctLjI2Ni44NzItLjI5NyAxLjU1My0uMDMuNjgzLS4wMzguOS0uMDM4IDIuNjQgMCAxLjczNy4wMDggMS45NTUuMDM5IDIuNjM3LjAzLjY4Mi4xMzggMS4xNDcuMjk2IDEuNTU0LjE2My40Mi4zODEuNzc4LjczNiAxLjEzNC4zNTUuMzU1LjcxMS41NzUgMS4xMy43MzguNDA3LjE1OC44NzEuMjY2IDEuNTUuMjk3LjY4Mi4wMzEuOS4wNCAyLjYzMy4wNCAxLjczNCAwIDEuOTUtLjAwOSAyLjYzMS0uMDQuNjgtLjAzIDEuMTQ1LS4xMzkgMS41NS0uMjk3LjQyLS4xNjMuNzc2LS4zODMgMS4xMy0uNzM4LjM1Ni0uMzU2LjU3NC0uNzEzLjczOC0xLjEzNC4xNTctLjQwNy4yNjQtLjg3Mi4yOTYtMS41NTMuMDMtLjY4My4wMzktLjkuMDM5LTIuNjM5IDAtMS43MzgtLjAwOC0xLjk1Ni0uMDM5LTIuNjM5LS4wMzItLjY4MS0uMTQtMS4xNDYtLjI5Ni0xLjU1M2EzLjE0MiAzLjE0MiAwIDAwLS43MzctMS4xMzQgMy4xMiAzLjEyIDAgMDAtMS4xMy0uNzM4Yy0uNDA4LS4xNTgtLjg3Mi0uMjY2LTEuNTUxLS4yOTctLjY4MS0uMDMxLS44OTgtLjAzOS0yLjYzMy0uMDM5aC4wMDJ6bS0uNTcyIDEuMTUzaC41NzJjMS43MDUgMCAxLjkwNy4wMDYgMi41OC4wMzcuNjIzLjAyOS45Ni4xMzMgMS4xODUuMjIuMjk4LjExNy41MS4yNTUuNzM0LjQ4LjIyNC4yMjMuMzYyLjQzNy40NzguNzM1LjA4Ny4yMjYuMTkxLjU2NC4yMiAxLjE4OC4wMy42NzUuMDM3Ljg3OC4wMzcgMi41ODYgMCAxLjcwOC0uMDA3IDEuOTEtLjAzNyAyLjU4NS0uMDI5LjYyNC0uMTMzLjk2My0uMjIgMS4xODhhMS45OCAxLjk4IDAgMDEtLjQ3OC43MzUgMS45NzMgMS45NzMgMCAwMS0uNzM0LjQ3OWMtLjIyNC4wODgtLjU2Mi4xOTItMS4xODUuMjItLjY3My4wMzEtLjg3NS4wMzgtMi41OC4wMzgtMS43MDQgMC0xLjkwNi0uMDA3LTIuNTgtLjAzOC0uNjIyLS4wMjgtLjk2LS4xMzMtMS4xODUtLjIyYTEuOTc3IDEuOTc3IDAgMDEtLjczNC0uNDc5IDEuOTg0IDEuOTg0IDAgMDEtLjQ3Ny0uNzM2Yy0uMDg4LS4yMjUtLjE5Mi0uNTY0LS4yMi0xLjE4OC0uMDMtLjY3NC0uMDM3LS44NzctLjAzNy0yLjU4NiAwLTEuNzEuMDA2LTEuOTEuMDM3LTIuNTg1LjAyOC0uNjI0LjEzMi0uOTYzLjIyLTEuMTg5LjExNS0uMjk4LjI1NC0uNTEyLjQ3Ny0uNzM2YTEuOTggMS45OCAwIDAxLjczNC0uNDc5Yy4yMjUtLjA4OC41NjMtLjE5MiAxLjE4Ni0uMjIuNTg5LS4wMjcuODE3LS4wMzUgMi4wMDctLjAzNnYuMDAxem0zLjgzMSAxLjA2M2EuNjE4LjYxOCAwIDEwLjAwMSAxLjIzNS42MTguNjE4IDAgMDAtLjAwMS0xLjIzNXptLTMuMjU4Ljg5N0EzLjI4MyAzLjI4MyAwIDAwOC42OTEgMTJhMy4yODIgMy4yODIgMCAwMDMuMjc4IDMuMjg2YzEuODExIDAgMy4yNzgtMS40NyAzLjI3OC0zLjI4NmEzLjI4MiAzLjI4MiAwIDAwLTMuMjc4LTMuMjg3em0wIDEuMTU0QTIuMTMgMi4xMyAwIDAxMTQuMDk4IDEyYTIuMTMgMi4xMyAwIDAxLTIuMTI4IDIuMTMzQTIuMTMgMi4xMyAwIDAxOS44NDMgMTJhMi4xMyAyLjEzIDAgMDEyLjEyNy0yLjEzM3oiIGZpbGw9IiM0MDQ1NTMiLz48L2c+PC9zdmc+" alt="Instagram" />
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48dGl0bGUgaWQ9InRpdGxlIj5mb290ZXJfbGlua2VkaW5fY29sb3I8L3RpdGxlPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAxMkMwIDUuMzczIDUuMzczIDAgMTIgMHMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMlMwIDE4LjYyNyAwIDEyeiIgZmlsbD0iI0ZFRUUwMCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNy43NzcgNy44NzJDOC41MzcgNy44NzIgOSA3LjMxOSA5IDYuNjM2Yy0uMDE1LS43LS40NjItMS4yMzYtMS4xOTMtMS4yMzYtLjczIDAtMS4yMDcuNTM3LTEuMjA3IDEuMjM2IDAgLjY4My40NjIgMS4yMzYgMS4xNzcgMS4yMzZ6bS0xLjExNy45NzZWMTYuOGgyLjI2NlY4Ljg0OEg2LjY2eiIgZmlsbD0iIzQwNDU1MyIvPjxwYXRoIGQ9Ik0xMC4yNjYgMTEuNjA1YzAtLjk1MS0uMDMzLTEuNzQ3LS4wNjYtMi40MzNoMi4ybC4xMTcgMS4wNmguMDVDMTIuOSA5LjczNCAxMy43MTcgOSAxNS4wODMgOSAxNi43NSA5IDE4IDEwLjA0NSAxOCAxMi4yOTFWMTYuOGgtMi41MzR2LTQuMjI4YzAtLjk4Mi0uMzY2LTEuNjUzLTEuMjgzLTEuNjUzLS43IDAtMS4xMTYuNDUyLTEuMy44OS0uMDY2LjE1NS0uMDgzLjM3My0uMDgzLjU5MlYxNi44aC0yLjUzNHYtNS4xOTV6IiBmaWxsPSIjNDA0NTUzIi8+PC9zdmc+" alt="Linkedin" />
                    </div>
                </div>
            </div>
            <div className={styles.more_info_container}>
                <p>© 2022 noon. All Rights Reserved</p>
                <div className={styles.paymnets}>
                    <img src="https://f.nooncdn.com/s/app/com/noon/images/mastercard-color.svg" alt="Master Card" />
                    <img src="https://f.nooncdn.com/s/app/com/noon/images/visa-color.svg" alt="Visa" />
                    <img src="https://f.nooncdn.com/s/app/com/noon/images/cash-color.svg" alt="Cash" />
                    <img src="https://f.nooncdn.com/s/app/com/noon/images/amex-color.svg" alt="American Expresss" />
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