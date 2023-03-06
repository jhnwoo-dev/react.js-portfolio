import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import "./styles.css";

function App() {
    return (
        <div className="App">
            <Header />
            {/* <Content pageToDisplay={currentPage}></Content> */}
            <Footer />
        </div>
    );
}

export default App;
