import { Accuracy, Difference, Points, Rank } from './components';

export default function PredictionGameStats() {
	return (
		<div className="grid grid-cols-2 items-stretch rounded-xl bg-gray-100 md:grid-cols-4">
			<Rank />
			<Difference />
			<Accuracy />
			<Points />
		</div>
	);
}
