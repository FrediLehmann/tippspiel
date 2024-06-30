import axios from 'axios';
import * as cheerio from 'cheerio';

type Game = {
	id: number;
	prediction_game: number;
	game_date: Date;
	home_team: string;
	guest_team: string;
	result: number[] | undefined;
};

async function loadGamesFromUrl(game: {
	id: number;
	results_url: string;
	teams: { name: string };
}) {
	try {
		const site = await axios.get(game.results_url);

		const $ = cheerio.load(site.data);

		const gameResults = $("div[id*='MatchcenterMaster'][id$='tbResultate']").children();

		let currentGameDay: string;
		const games: Game[] = [];
		gameResults.each((_, element) => {
			if (element.tagName === 'div') {
				currentGameDay = $(element).text().trim().split(' ')[1];
				return;
			}

			const gameId = $(element).children().find('.spielInfo').text().trim().split(' ')[1];
			const time = $(element).children().find('.time').text().trim();
			const homeTeam = $(element).children().find('.teams > div').first().text().trim();
			const guestTeam = $(element).children().find('.teams > div').last().text().trim();
			const goalsHomeTeam = $(element).children().find('.goals > div').first().text().trim();
			const goalsGuestTeam = $(element).children().find('.goals > div').last().text().trim();

			if (homeTeam !== game.teams.name && guestTeam !== game.teams.name) return;

			const gameDateTime = `${currentGameDay.split('.').reverse().join('-')} ${time}+01:00`;

			games.push({
				id: parseInt(gameId, 10),
				prediction_game: game.id,
				game_date: new Date(Date.parse(gameDateTime)),
				home_team: homeTeam,
				guest_team: guestTeam,
				result: [parseInt(goalsHomeTeam, 10), parseInt(goalsGuestTeam, 10)]
			});
		});

		return games;
	} catch (err) {
		console.error(err);
		return [];
	}
}

export default async function getGames(
	predictionGames: {
		id: number;
		results_url: string;
		teams: { name: string };
	}[]
): Promise<Game[]> {
	const games: Game[] = [];

	for (const game of predictionGames) {
		const gamesFromUrl = await loadGamesFromUrl(game);
		games.push(...gamesFromUrl);
	}

	return games;
}
