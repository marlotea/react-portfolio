import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { NavBar } from "./components/NavBar/NavBar";
import { Projects } from "./components/Projects/Projects";

function App() {
    return (
        <div className={styles.App}>
            <NavBar />
            <Home />
            <About />
            <Experience />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
