import { useSelector } from "react-redux";
import QuestionPart from "../../components/QuestionPart";
import { base } from "../database/base";
import Css5 from "./Css";

const Question5 = () => {
  const index = useSelector((state: any) => {
    return state.index;
  });
  let showPath = index + 4;
  // console.log("show", base[showPath].question);

  return (
    <main className="flex gap-2 w-full p-2">
      <Css5 />
      <QuestionPart
        paths="/question5"
        questions={base[showPath - 1].question}
        answers={base[showPath - 1].answer}
      />
    </main>
  );
};

export default Question5;
