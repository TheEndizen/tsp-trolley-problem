import TypeWriter from "@/app/typewriter"

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="w-full flex items-center flex-col">
        <h1 className="text-black mt-4 font-bold text-4xl hover:-translate-y-2 transition-all">
          The Travelling Salesman Trolley Problem
        </h1>
        <p className="text-gray-600 text-lg hover:translate-y-3 transition">
          By Colin and Mabel
        </p>
      </div>
      <div className="w-full h-full flex justify-center mt-5 px-[20%]">
        <TypeWriter text="You've heard of the trolley problem. You've probably heard of the travelling salesman problem. Now, use your buttons to navigate the shortest path whilst avoiding as much guilt as possible." speed={50}/>
      </div>
      <div className="absolute w-full h-1/4 bottom-0 flex items-center justify-evenly">
        <button className="bg-white text-black p-4 w-1/6 h-1/2 rounded-full font-bold text-2xl border-black border-2 hover:bg-black hover:text-white active:bg-gray-900 transition-all">
          Choice 1
        </button>
        <button className="bg-white text-black p-4 w-1/6 h-1/2 rounded-full font-bold text-2xl border-black border-2 hover:bg-black hover:text-white active:bg-gray-900 transition-all">
          Choice 2
        </button>
      </div>
    </div>
  );
}