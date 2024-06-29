import axios from 'axios';
import * as cheerio from 'cheerio';

type Game = {
	id: number;
	game_date: Date;
	home_team: string;
	guest_team: string;
	result: number[] | undefined;
};

export default async function getGames(): Promise<Game[]> {
	try {
		const site = await axios.get(
			'https://matchcenter.aff-ffv.ch/default.aspx?oid=13&lng=1&s=2024&ln=13029&ls=22389&sg=63259&a=msp'
		);

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

			const gameDateTime = `${currentGameDay.split('.').reverse().join('-')} ${time}+01:00`;

			games.push({
				id: parseInt(gameId, 10),
				game_date: new Date(Date.parse(gameDateTime)),
				home_team: homeTeam,
				guest_team: guestTeam,
				result: [parseInt(goalsHomeTeam, 10), parseInt(goalsGuestTeam, 10)]
			});
		});

		return games;
	} catch (err) {
		throw err;
	}
}
