interface Game {
	name: string;
	logo: string;
	getPresenceData: (
		params: GameCallbackParams
	) => Promise<PresenceData> | PresenceData;
}

interface GamePlayerState {
	playerName?: string;
	username?: string;
	playerInfo?: {
		username?: string;
	};
	state?: string;
	status?: string;
	kind?: string;
	category?: string;
	prompt?: {
		text?: string;
		html?: string;
	};
	goal?: string;
	options?: string[];
	instructions?: string;
	textEntry?: {
		autoSubmit: boolean;
		prompt: string;
		responseKey: string;
		responseText: string;
	};
	entryId?: string;
	choiceId?: string;
	responseKey?: string;
	placeholder?: string;
	choiceType?: string;
	classes?: string[];
	[x: string]: unknown;
}

interface GameInfoState {
	name?: string;
}

interface GameCallbackParams {
	playerState: GamePlayerState;
	infoState: GameInfoState;
	tag: string;
	presence: Presence;
}
