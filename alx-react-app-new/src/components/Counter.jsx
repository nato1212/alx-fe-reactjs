import { useState } from "react";

function Counter() {
  // Initialize state with useState hook
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg w-80 mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Simple Counter</h1>
      <p className="text-xl mb-6">Current Count: {count}</p>
      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
