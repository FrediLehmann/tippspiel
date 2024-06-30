'use client';

import { RankList, Title } from './components';

export default function CurrentRank() {
	return (
		<div className="w-full md:w-72">
			<Title />
			<RankList />
		</div>
	);
}
