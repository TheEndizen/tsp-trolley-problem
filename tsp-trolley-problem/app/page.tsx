import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-full h-1/4 flex items-center flex-col">
        <h1 className="text-black mt-4 font-bold text-4xl hover:-translate-y-1 transition-all">
          The Travelling Salesman Trolley Problem
        </h1>
        <p className="text-gray-600 text-lg">
          By Colin and Mabel
        </p>
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
