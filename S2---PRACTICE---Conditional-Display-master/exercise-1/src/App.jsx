import Header from "./components/Header.jsx";
import Scores from "./components/Scores.jsx";
import { JAVA_RESULTS, PYTHON_RESULTS, HTML_RESULTS, ENGLISH_RESULTS } from "./data.js";

function App() {
  return (
    <>
      <Header /> 

      <main className="scores-container">
        <Scores courseName="JAVA" courseResults={JAVA_RESULTS} />
        <Scores courseName="HTML" courseResults={HTML_RESULTS} />
        <Scores courseName="PYTHON" courseResults={PYTHON_RESULTS} />
        <Scores courseName="ENGLISH" courseResults={ENGLISH_RESULTS} />
      </main>
    </>
  );
}

export default App;
