import { ArrowUpIcon } from "lucide-react";

export default function PredictionGameStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 items-stretch bg-gray-100 rounded-xl">
      <div className="border-r-2 border-white px-8 py-3 md:py-4 text-center bg-yellow-500 bg-opacity-20 text-yellow-900 rounded-tl-xl md:rounded-l-xl">
        <div className="text-lg md:text-xl font-bold">3er</div>
        <div>Rang</div>
      </div>
      <div className="border-r-2 border-white px-8 py-3 md:py-4 text-center bg-green-100 text-green-800 rounded-tr-xl md:rounded-none">
        <div className="flex items-center justify-center text-lg md:text-xl font-bold">
          <ArrowUpIcon className="w-5 md:w-7 h-5 md:h-7" /> 2
        </div>
        <div>Differenz</div>
      </div>
      <div className="border-r-2 border-t-2 md:border-t-0 border-white px-8 py-3 md:py-4 text-center">
        <div className="text-lg md:text-xl  font-bold">85%</div>
        <div className="text-neutral-700">Genauigkeit</div>
      </div>
      <div className="border-r-2 border-t-2 md:border-t-0 border-white px-8 py-3 md:py-4 text-center">
        <div className="text-lg md:text-xl  font-bold">675</div>
        <div className="text-neutral-700">Punkte</div>
      </div>
    </div>
  );
}
