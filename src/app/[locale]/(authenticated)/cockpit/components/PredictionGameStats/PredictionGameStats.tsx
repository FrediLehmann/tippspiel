import { ArrowUpIcon } from "lucide-react";

export default function PredictionGameStats() {
  return (
    <div className="grid grid-cols-2 items-stretch rounded-xl bg-gray-100 md:grid-cols-4">
      <div className="rounded-tl-xl border-r-2 border-white bg-yellow-500 bg-opacity-20 px-8 py-3 text-center text-yellow-900 md:rounded-l-xl md:py-4">
        <div className="text-lg font-bold md:text-xl">3er</div>
        <div>Rang</div>
      </div>
      <div className="rounded-tr-xl border-r-2 border-white bg-green-100 px-8 py-3 text-center text-green-800 md:rounded-none md:py-4">
        <div className="flex items-center justify-center text-lg font-bold md:text-xl">
          <ArrowUpIcon className="h-5 w-5 md:h-7 md:w-7" /> 2
        </div>
        <div>Differenz</div>
      </div>
      <div className="border-r-2 border-t-2 border-white px-8 py-3 text-center md:border-t-0 md:py-4">
        <div className="text-lg font-bold md:text-xl">85%</div>
        <div className="text-neutral-700">Genauigkeit</div>
      </div>
      <div className="border-r-2 border-t-2 border-white px-8 py-3 text-center md:border-t-0 md:py-4">
        <div className="text-lg font-bold md:text-xl">675</div>
        <div className="text-neutral-700">Punkte</div>
      </div>
    </div>
  );
}
