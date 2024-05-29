"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";

export default function PredictionGameStats() {
  return (
    <Select value="erste-manschaft-fc-schmitten">
      <SelectTrigger className="w-full md:w-96">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="erste-manschaft-fc-schmitten">
          Erste Manschaft FC Schmitten
        </SelectItem>
        <SelectItem value="zweite-manschaft-fc-schmitten">
          Zweite Manschaft FC Schmitten
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
