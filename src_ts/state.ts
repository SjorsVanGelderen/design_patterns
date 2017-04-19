/*
    The global application state
    Copyright 2017, Sjors van Gelderen
*/

import * as Entities from "./entities"

export class State {
    public entities: Entities.Entity[]

    constructor() {
        this.entities = [
            new Entities.Player(),
            new Entities.Enemy(),
            new Entities.Projectile(),
            new Entities.Projectile(),
            new Entities.Projectile(),
            new Entities.Projectile(),
            new Entities.Projectile(),
            new Entities.Projectile(),
            new Entities.Projectile(),
            new Entities.Projectile(),
        ]
    }
}