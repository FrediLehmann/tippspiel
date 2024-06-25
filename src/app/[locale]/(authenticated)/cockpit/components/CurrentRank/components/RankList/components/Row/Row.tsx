'use client';

import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export default function Row({
	rank,
	name,
	change,
	points,
	highligthed
}: {
	rank: number;
	name: string;
	change: number;
	points: number;
	highligthed?: boolean;
}) {
	return (
		<div
			className={cn(
				'flex items-center justify-between',
				rank === 1 && 'bg-yellow-100 bg-opacity-50',
				rank === 2 && 'bg-gray-100 bg-opacity-50',
				rank === 3 && 'bg-yellow-700 bg-opacity-10',
				highligthed && 'animate-pulse bg-blue-200 bg-opacity-50'
			)}>
			<div className="max-w-1/3 flex gap-4 px-2 py-2">
				<div>{rank}</div>
				<div className="text-nowrap">
					{name}
					{rank === 1 && '🥇'}
					{rank === 2 && '🥈'}
					{rank === 3 && '🥉'}
				</div>
			</div>
			<div className="max-w-1/4 px-2 py-2">
				<div
					className={cn(
						'flex items-center justify-center rounded-lg p-1 pl-0 text-center',
						change > 0 && 'bg-green-200 text-green-900',
						change < 0 && 'bg-red-200 text-red-900',
						change === 0 && 'bg-neutral-200 text-neutral-700'
					)}>
					{change > 0 && <ArrowUpIcon className="h-4 w-4 shrink-0" />}
					{change < 0 && <ArrowDownIcon className="h-4 w-4 shrink-0" />}
					{Math.abs(change)}
				</div>
			</div>
			<div className="max-w-1/3 px-2 py-2">{points}</div>
		</div>
	);
}
