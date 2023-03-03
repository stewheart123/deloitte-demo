import Header from "./components/Header";
import FeatureImage from "./components/FeatureImage";
import {QuestionBlock} from "./components/QuestionBlock";
function App() {
  
  return (
    <div>
      <Header />
      <section className="two-col-container">
        <FeatureImage image={"Rectangle 341.png"} />
        <QuestionBlock />
      </section>
    </div>
  );
}

export default App;
