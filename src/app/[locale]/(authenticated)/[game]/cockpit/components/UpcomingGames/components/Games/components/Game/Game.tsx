'use client';

import { format, isPast } from 'date-fns';
import { EditIcon, InfoIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button, Popover, PopoverContent, PopoverTrigger } from '@/components/ui';
import { cn } from '@/lib/utils';

type Teams = [string, string];
type Tip = [number, number];
type Result = [number, number];
type Game = {
	date: Date;
	teams: Teams;
	result?: Result;
	tip?: Tip;
	points?: number;
};

export default function Game({ date, teams, result, tip, points }: Game) {
	const t = useTranslations('Cockpit.games.game');
	return (
		<div
			className={cn(
				'grid grid-cols-5 gap-4 px-4 py-2 font-semibold md:grid-cols-7',
				isPast(date) && 'bg-neutral-100'
			)}>
			<div>
				<div className="text-sm text-neutral-500">{t('date')}</div>
				<div>{format(date, 'HH:mm')}</div>
				<div>{format(date, 'dd.MM.')}</div>
			</div>
			<div className="col-span-2">
				<div className="text-sm text-neutral-500">{t('teams')}</div>
				<div>{teams[0]}</div>
				<div>{teams[1]}</div>
			</div>
			<div>
				<div className="text-sm text-neutral-500">{t('tip')}</div>
				<div>
					{tip ? (
						<>
							<div>{tip[0]}</div>
							<div>{tip[1]}</div>
						</>
					) : (
						'-'
					)}
				</div>
			</div>
			<div>
				<div className="text-sm text-neutral-500">{t('result')}</div>
				<div>
					{result ? (
						<>
							<div>{result[0]}</div>
							<div>{result[1]}</div>
						</>
					) : (
						'-'
					)}
				</div>
			</div>
			{points !== undefined ? (
				<div className="col-span-2">
					<div className="flex items-start text-sm text-neutral-500">
						{t('points')}
						<Popover>
							<PopoverTrigger asChild>
								<Button variant="link" className="h-4 items-start px-2 py-0">
									<InfoIcon className="h-4 w-4" />
								</Button>
							</PopoverTrigger>
							<PopoverContent>{t('pointsInfo')}</PopoverContent>
						</Popover>
					</div>
					<div>{points ?? '-'}</div>
				</div>
			) : (
				<div className="col-span-2">
					<Button variant="outline">
						<EditIcon className="mr-1 h-4 w-4" /> {t('editTip')}
					</Button>
				</div>
			)}
		</div>
	);
}
