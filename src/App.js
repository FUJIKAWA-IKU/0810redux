import "./App.css";
import Count from "./components/Count";
// import Post from "./components/Post";
import User from "./components/User";
import { useSelector, useDispatch } from "react-redux";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: 'INCREASE_COUNT' });
  };
  const decrease = () => {
    dispatch({ type: "DECREASE_COUNT" });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Redux Learn</h1>
        <p>Count:{count}</p>
        <Count />
        <button onClick={increase}>Up</button>
        <button onClick={decrease}>Down</button>
        {/* <Post /> */}
        <User />
      </div>
    </QueryClientProvider>
  );
}
export default App;
