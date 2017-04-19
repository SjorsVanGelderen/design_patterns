/*
    Iterator pattern
    Behavioral pattern
    Copyright 2017, Sjors van Gelderen
*/

import * as Vector2 from "./vector2"
import * as Option from "./option_and_visitor"
import * as Entities from "./entities"

interface IIterator<T> {
    next<T>(): T
}

interface IIOptionIterator {
    next<T>(): Option.IOption<T>
}

export class LevelPopulator implements IIterator<Entities.Entity[]> {
    level: number = 0
    populations: (() => Entities.Entity[])[]

    constructor() {
        this.populations = [
            function(): Entities.Entity[] {
                return [
                    new Entities.Player(new Vector2.Vector2(128, 128)),
                ]
            },
            function(): Entities.Entity[] {
                return [
                    new Entities.Player(new Vector2.Vector2(128, 128)),
                    new Entities.Enemy(new Vector2.Vector2(128, 128)),
                    new Entities.Enemy(new Vector2.Vector2(128, 128)),
                    new Entities.Enemy(new Vector2.Vector2(128, 128)),
                ]
            },
            function(): Entities.Entity[] {
                return [
                    new Entities.Player(new Vector2.Vector2(128, 128)),
                    new Entities.Enemy(new Vector2.Vector2(128, 128)),
                    new Entities.Projectile(new Vector2.Vector2(128, 128)),
                    new Entities.Projectile(new Vector2.Vector2(128, 128)),
                ]
            },
        ]
    }

    next(): Entities.Entity[] {
        if(this.populations.length == 0) {
            console.log("There aren't any populations from which to draw")
            return []
        }

        const return_value: Entities.Entity[] = this.populations[this.level]()
        this.level = (this.level + 1) % this.populations.length
        return return_value
    }
}