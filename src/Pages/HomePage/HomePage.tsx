import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { ThemeContextInterface } from "../../types";


const HomePage = () => {
    const { darkTheme, toggleTheme } = useContext(
        ThemeContext
    ) as ThemeContextInterface;

    return (
        <div>
            <button className="btn btn-primary" onClick={toggleTheme}>
                Theme {darkTheme ? "dark" : 'light'}
            </button>
        </div>
    )
}

export default HomePage