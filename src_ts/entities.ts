/*
    Various game entities
    Copyright 2017, Sjors van Gelderen
*/

import * as State from "./state"
import * as Vector2 from "./vector2"

export abstract class Entity {
    public abstract sprite: HTMLImageElement
    public abstract position: Vector2.Vector2
    public abstract velocity: Vector2.Vector2
    public abstract frame: number
    public abstract frame_amount: number
    public abstract count: number

    constructor(filename: string) {
        this.sprite = new Image()
        this.sprite.src = "assets/" + filename
    }

    public abstract update(state: State.State): void

    public draw(context: CanvasRenderingContext2D): void {
        context.drawImage(
            this.sprite,
            this.frame * 24,
            0,
            24,
            24,
            this.position.x,
            this.position.y,
            24,
            24
        )
    }
}

export class Player extends Entity {
    public sprite: HTMLImageElement
    public position: Vector2.Vector2 = new Vector2.Vector2()
    public velocity: Vector2.Vector2 = new Vector2.Vector2(1, 1)
    public frame: number = 0
    public frame_amount: number = 8
    public count: number = 0

    constructor() {
        super("player.png") // Call base class
    }

    public update(state: State.State): void {
        this.count += 1
        if(this.count == 2) {
            this.frame = (this.frame + 1) % this.frame_amount
            this.count = 0
        }
        
        this.position.add(this.velocity)
    }
}

export class Enemy extends Entity {
    public sprite: HTMLImageElement
    public position: Vector2.Vector2 = new Vector2.Vector2(1)
    public velocity: Vector2.Vector2 = new Vector2.Vector2(1, 0)
    public frame: number = 0
    public frame_amount: number = 8
    public count: number = 0

    constructor() {
        super("enemy.png") // Call base class
    }

    public update(state: State.State): void {
        this.count += 1
        if(this.count == 1) {
            this.frame = (this.frame + 1) % this.frame_amount
            this.count = 0
        }

        this.position.add(this.velocity)
    }
}

export class Projectile extends Entity {
    public sprite: HTMLImageElement
    public position: Vector2.Vector2 = new Vector2.Vector2()
    public velocity: Vector2.Vector2 = new Vector2.Vector2(Math.random() - 0.5,
                                                           Math.random() - 0.5)
    public frame: number = 0
    public frame_amount: number = 2
    public count: number = 0

    constructor() {
        super("projectile.png") // Call base class
    }

    public update(state: State.State): void {
        this.count += 1
        if(this.count == 2) {
            this.frame = (this.frame + 1) % this.frame_amount
            this.count = 0
        }

        this.position.add(this.velocity)
    }
}