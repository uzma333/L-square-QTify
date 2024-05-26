import React from "react";
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Search from "../Search/Search";



function Navbar(){
return(
    <nav className={styles.navbar}>
        <Link to="/">
          <Logo/>  
        </Link>
        <Search placeholder="search"
        />
        <Button>Give Feedback</Button>
 </nav>
);
}
export default Navbar;