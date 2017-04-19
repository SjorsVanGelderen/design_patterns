/*
    Various game entities
    Copyright 2017, Sjors van Gelderen
*/

import * as State from "./state"
import * as Vector2 from "./vector2"
import * as Option from "./option_and_visitor"

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
        const sprite_size: number = this.sprite.width / this.frame_amount
        context.drawImage(
            this.sprite,
            this.frame * sprite_size,
            0,
            sprite_size,
            sprite_size,
            -sprite_size * 0.5 + this.position.x,
            -sprite_size * 0.5 + this.position.y,
            sprite_size,
            sprite_size
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

    private theta: number = 0

    constructor(position: Vector2.Vector2 = new Vector2.Vector2()) {
        super("player.png") // Call base class constructor
        this.position = position
    }

    public update(state: State.State): void {
        this.count += 1
        if(this.count == 2) {
            this.frame = (this.frame + 1) % this.frame_amount
            this.count = 0
        }
    
        this.theta += 0.01
        this.position.x = Math.sin(this.theta) * 64 + 64
        this.position.y = Math.sin(this.theta * 2) * 64 + 64
        
        //this.position.add(this.velocity)
    }
}

export class Enemy extends Entity {
    public sprite: HTMLImageElement
    public position: Vector2.Vector2 = new Vector2.Vector2(1)
    public velocity: Vector2.Vector2 = new Vector2.Vector2(1, 0)
    public frame: number = 0
    public frame_amount: number = 8
    public count: number = 0

    private something: Option.Some<number> = new Option.Some<number>(5)

    constructor(position: Vector2.Vector2 = new Vector2.Vector2()) {
        super("enemy.png") // Call base class constructor
        this.position = position
        console.log(this.something.visit(new Option.Visitor()))
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
    public velocity: Vector2.Vector2 = new Vector2.Vector2(Math.random() * 5 - 5,
                                                           Math.random() * 5 - 5)
    public frame: number = 0
    public frame_amount: number = 2
    public count: number = 0

    constructor(position: Vector2.Vector2 = new Vector2.Vector2()) {
        super("projectile.png") // Call base class constructor
        this.position = position
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