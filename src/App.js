import Todo from "./Components/Todo";
import PrevState from "./Components/PrevState";
import Effect from "./Components/Effect";

import { useState } from "react";
import Callback from "./Components/Callback";
import Ref from "./Components/Ref";
import Reducer from "./Components/Reducer";

function App() {

  const [show, setShow] = useState(true);
  return (
    <div>
      <Todo/>
      <PrevState/>
      <div>{show && <Effect/>}</div>
        <p>
        <button type="button" onClick={()=>setShow((prevShow)=>!prevShow)}>
          {show ? 'Hide Post': 'Show Post'}
        </button>
        </p>

        <Callback/>

        <Ref/>
        <Reducer/>
    </div>
  );
}

export default App;
