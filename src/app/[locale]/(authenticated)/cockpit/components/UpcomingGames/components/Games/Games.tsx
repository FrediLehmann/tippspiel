import { Game } from './components';

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

const games: Game[] = [
	{
		date: new Date('2024-08-15T18:00:00Z'),
		teams: ['FC Schmitten', 'CF Schönberg']
	},
	{
		date: new Date('2024-06-08T18:00:00Z'),
		teams: ['FC Schmitten', 'SC Düdingen 2'],
		tip: [0, 1]
	},
	{
		date: new Date('2024-06-01T18:00:00Z'),
		teams: ['FC Cressier', 'FC Schmitten'],
		tip: [0, 1],
		result: [0, 2],
		points: 3
	},
	{
		date: new Date('2024-05-24T18:00:00Z'),
		teams: ['FC Schmitten', 'FC Sense'],
		tip: [3, 2],
		result: [1, 1],
		points: 0
	}
];

export default function Games() {
	return (
		<div className="divide-y rounded border">
			{games.map(({ date, teams, result, tip, points }, index) => (
				<Game key={index} date={date} teams={teams} result={result} tip={tip} points={points} />
			))}
		</div>
	);
}
