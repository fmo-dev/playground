import { GameData } from './game.metadata';
import { YahtzeeComponent } from '../games/yahtzee/yahtzee.component';
export const GameList: GameData[] = [
    {
        name: 'Yahtzee',
        component : YahtzeeComponent,
        maxPlayers: 4,
        AI : false
    }
];
