import { Component, Type } from '@angular/core';

export interface GameData {
    name : string;
    component : Type<unknown>;
    maxPlayers : number;
    AI : boolean;
}