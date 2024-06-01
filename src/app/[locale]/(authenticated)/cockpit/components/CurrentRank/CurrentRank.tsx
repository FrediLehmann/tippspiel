"use client";

import { ArrowDownIcon, ArrowUpIcon, MoreVerticalIcon } from "lucide-react";

import { Link } from "@/lib/translation";
import { Button } from "@/components/ui";

export default function CurrentRank() {
  return (
    <>
      <div className="flex items-center justify-between mt-6 md:mt-10 mb-4">
        <div className="text-lg font-semibold">Rangliste</div>
        <Button asChild variant="outline">
          <Link href="/">Rangliste</Link>
        </Button>
      </div>
      <div className="border rounded">
        <div className="flex bg-neutral-100 font-semibold border-b items-center text-neutral-600 justify-between">
          <div className="flex gap-2">
            <div className="w-1/4 px-2 py-2">#</div>
            <div className="w-1/4 px-2 py-2">Name</div>
          </div>
          <div className="w-1/4 px-2 py-2"></div>
          <div className="w-1/4 px-2 py-2">Punkte</div>
        </div>
        <div className="flex items-center border-b justify-between bg-yellow-100 bg-opacity-50">
          <div className="flex gap-2">
            <div className="w-1/4 px-2 py-2">1</div>
            <div className="w-1/4 px-2 py-2">John</div>
          </div>
          <div className="w-1/4 px-2 py-2">
            <div className="flex max-w-10 justify-center items-center text-center pl-0 p-1 rounded-lg bg-green-200">
              <ArrowUpIcon className="w-4 h-4 shrink-0" />5
            </div>
          </div>
          <div className="w-1/4 px-2 py-2">1000</div>
        </div>
        <div className="flex items-center border-b justify-between bg-gray-100 bg-opacity-50">
          <div className="flex gap-2">
            <div className="w-1/4 px-2 py-2 max-w-8">2</div>
            <div className="w-1/4 px-2 py-2">Alice</div>
          </div>
          <div className="w-1/4 px-2 py-2">
            <div className="flex max-w-10 justify-center items-center text-center pl-0 p-1 rounded-lg bg-red-200">
              <ArrowDownIcon className="w-4 h-4 shrink-0" />2
            </div>
          </div>
          <div className="w-1/4 px-2 py-2">950</div>
        </div>
        <div className="flex items-center border-b justify-between bg-yellow-700 bg-opacity-10">
          <div className="flex gap-2">
            <div className="w-1/4 px-2 py-2  max-w-8">3</div>
            <div className="w-1/4 px-2 py-2">Bob</div>
          </div>
          <div className="w-1/4 px-2 py-2">
            <div className="flex max-w-10 justify-center items-center text-center pl-0 p-1 rounded-lg bg-neutral-200">
              0
            </div>
          </div>
          <div className="w-1/4 px-2 py-2">900</div>
        </div>
        <div className="py-3 border-b">
          <MoreVerticalIcon className="mx-auto w-3 h-3" />
        </div>
        <div className="flex items-center border-b justify-between">
          <div className="flex gap-2">
            <div className="w-1/4 px-2 py-2  max-w-8">10</div>
            <div className="w-1/4 px-2 py-2">Sophia</div>
          </div>
          <div className="w-1/4 px-2 py-2">
            <div className="flex max-w-10 justify-center items-center text-center pl-0 p-1 rounded-lg bg-green-200">
              <ArrowUpIcon className="w-4 h-4 shrink-0" />4
            </div>
          </div>
          <div className="w-1/4 px-2 py-2">550</div>
        </div>
        <div className="flex items-center border-b justify-between bg-blue-200 bg-opacity-50 animate-pulse">
          <div className="flex gap-2">
            <div className="w-1/4 px-2 py-2  max-w-8">11</div>
            <div className="w-1/4 px-2 py-2">Matthew</div>
          </div>
          <div className="w-1/4 px-2 py-2">
            <div className="flex max-w-10 justify-center items-center text-center pl-0 p-1 rounded-lg bg-red-200">
              <ArrowDownIcon className="w-4 h-4 shrink-0" />4
            </div>
          </div>
          <div className="w-1/4 px-2 py-2">500</div>
        </div>
        <div className="flex items-center border-b justify-between">
          <div className="flex gap-2">
            <div className="w-1/4 px-2 py-2  max-w-8">12</div>
            <div className="w-1/4 px-2 py-2">Emma</div>
          </div>
          <div className="w-1/4 px-2 py-2">
            <div className="flex max-w-10 justify-center items-center text-center pl-0 p-1 rounded-lg bg-neutral-200">
              0
            </div>
          </div>
          <div className="w-1/4 px-2 py-2">450</div>
        </div>
        <div className="py-3">
          <MoreVerticalIcon className="mx-auto w-3 h-3" />
        </div>
      </div>
    </>
  );
}
