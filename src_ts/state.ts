/*
    The global application state
    Copyright 2017, Sjors van Gelderen
*/

import * as Iterator from "./iterator"
import * as Entities from "./entities"

export class State {
    public populator: Iterator.LevelPopulator
    public entities: Entities.Entity[]

    constructor() {
        this.populator = new Iterator.LevelPopulator()
        this.entities = this.populator.next()
    }
}