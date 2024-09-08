import { FC, useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../Redux/redux";
import { Link } from "react-router-dom";

interface iProps {
  questions?: string;
  answers?: string;
  paths?: string;
}

const QuestionPart: FC<iProps> = ({ questions, answers, paths }) => {
  console.log("shwo", answers);

  const [state, setState] = useState<string>(``);
  const ref: any = useRef(null);
  //this is from redux picking the userName  globally so whenever the userrefreshes the name still remain the same
  const userName = useSelector((state: any) => {
    return state.userName;
  });

  const mounted = (editor: any) => {
    ref.current = editor;
    editor.focus;
  };
  function handleEditorChange(change?: string) {
    setState(change!);
  }

  const clcicking = useSelector((state: any) => {
    return state.value;
  });

  console.log("check", clcicking);
  const dispatch = useDispatch();
  useEffect(() => {
    if (state === answers) {
      dispatch(setValue(true));
      console.log("Correct");
    } else {
      dispatch(setValue(false));
    }
  }, [state]);

  return (
    <section className="w-[500px] h-[95vh] bg-green-100 rounded-md p-2">
      <div className="flex gap-2">
        <div className="w-[90px] flex justify-center items-center px-1 h-[40px] my-5 bg-slate-400 rounded-md">
          {userName}
        </div>
        <div className="min-w-[90px] flex justify-center items-center px-1 min-h-[40px] my-5 bg-slate-400 rounded-md">
          {questions}
        </div>
      </div>

      <Editor
        height="50vh"
        defaultValue={state}
        onChange={handleEditorChange}
        onMount={mounted}
      />

      <button
        className={` border px-8 py-2 ${
          clcicking ? "bg-red-500" : "bg-red-300"
        } text-white rounded-md `}
        // onClick={handleClick}
        disabled={!dispatch}
      >
        <Link to={paths!}> {clcicking ? "Next" : "Thinking?"}</Link>
      </button>
    </section>
  );
};

export default QuestionPart;
