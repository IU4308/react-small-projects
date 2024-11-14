import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa"
import { useContext } from "react";
import DataContext from "./context/DataContext";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
    const { width } = useContext(DataContext);
    return (
        <header className="Header">
            <h1 > 
                <Link to='/' className="h1-link">{title}</Link>
            </h1>
            {width < 768 ? <FaMobileAlt />
                : width < 992 ? <FaTabletAlt />
                    : <FaLaptop />}   
        </header>
    )
}

export default Header