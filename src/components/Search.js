import styles from "./Search.module.css"
import {FaSearch} from "react-icons/fa"
import {useSearchParams } from "react-router-dom";


export function Search() {

    const [query, setQuery]=useSearchParams()
    const search = query.get("search")



    //const [searchText, setsearchText] = useState(' ');

    // useEffect(() => {
    //     setsearchText(search || '')
    // }, [search]);


    const handleSubmit = (e) =>{
        e.preventDefault();
    }


    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox} >
                <input 
                    type="text" 
                    className={styles.searchInput} 
                    value={search ?? ' '}
                    autoFocus
                    placeholder="Title"
                    aria-label="Search Movies"
                    onChange={(e) => {
                        const value = e.target.value;
                        setQuery({search: value})
                        //navigate("/?search="+ value)
                    }}
                />
                <button 
                type="submit" 
                className={styles.searchButton}>
                       <FaSearch sixe={20} />
                </button>
            </div>
        </form>
    )
}
