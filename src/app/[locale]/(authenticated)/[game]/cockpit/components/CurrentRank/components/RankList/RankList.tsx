'use client';

import { MoreVerticalIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Row } from './components';

type Rank = {
	rank: number;
	name: string;
	points: number;
	change: number;
};

const leaders: Rank[] = [
	{ rank: 1, name: 'John', points: 89, change: 2 },
	{ rank: 2, name: 'Alice', points: 85, change: -1 },
	{ rank: 3, name: 'Bob', points: 80, change: 0 }
];

const userRanks: Rank[] = [
	{ rank: 10, name: 'Sophia', points: 55, change: 1 },
	{ rank: 11, name: 'Matthew', points: 50, change: -2 },
	{ rank: 12, name: 'Emma', points: 45, change: 0 }
];

export default function RankList() {
	const t = useTranslations();

	return (
		<div className="rounded border">
			<div className="flex items-center justify-between border-b bg-neutral-100 font-semibold text-neutral-600">
				<div className="max-w-1/3 flex gap-4 px-2 py-2">
					<div>#</div>
					<div>{t('Cockpit.ranklist.name')}</div>
				</div>
				<div className="max-w-1/4 sr-only px-2 py-2">{t('Cockpit.ranklist.change')}</div>
				<div className="max-w-1/3 px-2 py-2">{t('Cockpit.ranklist.points')}</div>
			</div>
			<div className="divide-y">
				{leaders.map(({ rank, name, points, change }) => (
					<Row key={rank} rank={rank} name={name} points={points} change={change} />
				))}
				<div className="py-3">
					<MoreVerticalIcon className="mx-auto h-3 w-3" />
				</div>
				{userRanks.map(({ rank, name, points, change }) => (
					<Row
						key={rank}
						rank={rank}
						name={name}
						points={points}
						change={change}
						highligthed={rank === 11}
					/>
				))}
				<div className="py-3">
					<MoreVerticalIcon className="mx-auto h-3 w-3" />
				</div>
			</div>
		</div>
	);
}
