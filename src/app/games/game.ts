import { Subject } from 'rxjs';

export interface Game {
    nbPlayers: number;
    onEnd : Subject<any>;
}