import { useContext } from "react"
import { counterContextObj } from "./context/ContextProvider"
import { useCounterStore } from "./store/CounterStore";
function Home() {

  let {newCounter,incrementCounter,decrementCounter}= useCounterStore()
  const { counter,Increment } = useContext(counterContextObj);

  return (
    <><div>
        <h1 className="text-4xl"> New Counter : {counter}</h1>
        <button onClick={incrementCounter} className="bg-amber-400"> Increment newCounter </button>
      </div></>
  )
}

export default Home;