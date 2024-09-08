import { useSelector } from "react-redux";
import QuestionPart from "../../components/QuestionPart";
import { base } from "../database/base";
import Css4 from "./Css";

const Question4 = () => {
  const index = useSelector((state: any) => {
    return state.index;
  });
  let showPath = index + 3;
  // console.log("show", base[showPath].question);

  return (
    <main className="flex gap-2 w-full p-2">
      <Css4 />
      <QuestionPart
        paths="/question5"
        questions={base[showPath - 1].question}
        answers={base[showPath - 1].answer}
      />
    </main>
  );
};

export default Question4;
