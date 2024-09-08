import { useRef, useState } from "react";
// import ReactDOM from 'react-dom';

import Editor from "@monaco-editor/react";
const Rabbit = () => {
  const [state, setState] = useState("");
  const editorRef = useRef(null);

  const handleEditorChange = (value: any) => {
    console.log("here is the current model value:", value);
    setState(value!);
  };

  return (
    <main className="flex justify-center items-center bg-black w-full h-[606px]">
      <section className="flex w-[80%] h-full border justify-between items-center gap-5">
        <div className="bg-pink-50 w-full h-full relative">
          <div className="w-[40px] h-[40px] rounded-full bg-green-950 absolute right-5 bottom-20">
            <div className="w-2 h-2 rounded-full bg-white m-2" />
          </div>
          <div className="w-[300px] h-[15px] bg-slate-500 absolute right-5 bottom-40" />
          <div className="w-[300px] h-[15px] bg-slate-500 absolute left-0 top-40" />
          <div className="w-[15px] h-[15px] bg-pink-500 rounded-full absolute left-5 bottom-80" />
          <div className="w-[15px] h-[15px] bg-pink-500 rounded-full absolute left-5 top-10" />
        </div>
        <div className="bg-white h-[400px] w-full">
          <Editor
            height="50vh"
            defaultLanguage="javascript"
            defaultValue="// write code"
            onMount={handleEditorChange}
          />
        </div>
      </section>
    </main>
  );
};

export default Rabbit;
