import Header from "./components/Header";
import {QuestionBlock} from "./components/QuestionBlock";
function App() {
  return (
    <div>
      <Header />
      <section className="career-selector">
        <div className="career-selector__feature-image"></div>
        <QuestionBlock />
      </section>
    </div>
  );
}

export default App;
