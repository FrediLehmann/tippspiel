"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

import { DataTable } from "@/components";
import { cn } from "@/lib/utils";

type Rank = {
  position: number;
  name: string;
  points: number;
  variation: number;
};

const data: Rank[] = [
  { position: 1, name: "John", points: 1000, variation: 5 },
  { position: 2, name: "Alice", points: 950, variation: -2 },
  { position: 3, name: "Bob", points: 900, variation: 0 },
  { position: 4, name: "Sarah", points: 850, variation: 3 },
  { position: 5, name: "Michael", points: 800, variation: -1 },
  { position: 6, name: "Emily", points: 750, variation: 2 },
  { position: 7, name: "David", points: 700, variation: 0 },
  { position: 8, name: "Olivia", points: 650, variation: 1 },
  { position: 9, name: "Daniel", points: 600, variation: -3 },
  { position: 10, name: "Sophia", points: 550, variation: 4 },
  { position: 11, name: "Matthew", points: 500, variation: -2 },
  { position: 12, name: "Emma", points: 450, variation: 1 },
  { position: 13, name: "James", points: 400, variation: 0 },
  { position: 14, name: "Ava", points: 350, variation: 3 },
  { position: 15, name: "Joseph", points: 300, variation: -1 },
  { position: 25, name: "Daniel", points: 276, variation: -1 },
  { position: 16, name: "Mia", points: 250, variation: 2 },
  { position: 24, name: "Harper", points: 216, variation: 3 },
  { position: 23, name: "Alexander", points: 202, variation: 0 },
  { position: 17, name: "William", points: 200, variation: 0 },
  { position: 21, name: "Ethan", points: 172, variation: -2 },
  { position: 18, name: "Charlotte", points: 150, variation: 1 },
  { position: 19, name: "Benjamin", points: 100, variation: -3 },
  { position: 22, name: "Abigail", points: 64, variation: 1 },
  { position: 20, name: "Amelia", points: 50, variation: 4 },
  { position: 26, name: "Elizabeth", points: 278, variation: 2 },
  { position: 27, name: "Michael", points: 291, variation: 0 },
  { position: 28, name: "Evelyn", points: 837, variation: 1 },
  { position: 29, name: "Matthew", points: 756, variation: -3 },
  { position: 30, name: "Sofia", points: 678, variation: 4 },
  { position: 31, name: "David", points: 982, variation: -2 },
  { position: 32, name: "Avery", points: 734, variation: 1 },
  { position: 33, name: "Joseph", points: 523, variation: 0 },
  { position: 34, name: "Grace", points: 491, variation: 3 },
  { position: 35, name: "Samuel", points: 123, variation: -1 },
  { position: 36, name: "Scarlett", points: 381, variation: 2 },
  { position: 37, name: "Daniel", points: 853, variation: 0 },
  { position: 38, name: "Chloe", points: 829, variation: 1 },
  { position: 39, name: "Benjamin", points: 912, variation: -3 },
  { position: 40, name: "Lily", points: 789, variation: 4 },
  { position: 41, name: "William", points: 876, variation: -2 },
  { position: 42, name: "Zoe", points: 942, variation: 1 },
  { position: 43, name: "James", points: 678, variation: 0 },
  { position: 44, name: "Nora", points: 932, variation: 3 },
  { position: 45, name: "Daniel", points: 728, variation: -1 },
  { position: 46, name: "Hannah", points: 853, variation: 2 },
  { position: 47, name: "Michael", points: 853, variation: 0 },
  { position: 48, name: "Layla", points: 953, variation: 1 },
  { position: 49, name: "Matthew", points: 433, variation: -3 },
  { position: 50, name: "Aria", points: 324, variation: 4 },
];

export const columns: ColumnDef<Rank>[] = [
  {
    accessorKey: "position",
    header: "#",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "variation",
    header: "",
    cell: ({ cell }) => {
      const change = cell.getValue<number>();
      return (
        <div
          className={cn(
            "flex max-w-10 justify-center items-center text-center pl-0 p-1 rounded-lg",
            change === 0 && "bg-neutral-200 max-w-8",
            change > 0 && "bg-green-200",
            change < 0 && "bg-red-200",
          )}
        >
          {change > 0 && <ArrowUpIcon className="w-4 h-4 shrink-0" />}
          {change < 0 && <ArrowDownIcon className="w-4 h-4 shrink-0" />}
          {Math.abs(change)}
        </div>
      );
    },
  },
  {
    accessorKey: "points",
    header: "Punkte",
  },
];

export default function CurrentRank() {
  return (
    <>
      <div className="text-lg font-semibold mt-6 md:mt-10 mb-4">Rangliste</div>
      <DataTable columns={columns} data={data} />
    </>
  );
}
