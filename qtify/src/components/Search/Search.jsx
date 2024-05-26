import React from "react";
import styles from "./Search.module.css";
import {ReactComponent as SearchIcon} from "../../assets/SearchIcon.svg";

function Search({placeholder}){
    return(
        <div style={{position:"relative"}}>
        <form className={styles.wrapper}  >
          <div>
            <input className={styles.search} placeholder={placeholder} />
          </div>
          
          <div>
              <button className={styles.searchButton} type='submit'>
                <SearchIcon/>
              </button>
          </div>
        </form>
          </div>
    )
}
export default Search;
