/*
    Copyright 2017, Sjors van Gelderen
*/

import * as Vector2 from "./vector2"
import * as State from "./state"
import * as Entities from "./entities"

// The application uses the singleton pattern -> singleton.ts
class Application {
    private static instance: Application // Singleton instance
    private state: State.State
    private canvas: HTMLCanvasElement
    private context: CanvasRenderingContext2D

    // The singleton instance cannot be instantiated from outside
    private constructor() {
        this.state = new State.State()
        this.canvas = <HTMLCanvasElement>document.getElementById("canvas")
        this.context = this.canvas.getContext("2d")
        this.context.imageSmoothingEnabled = false
        this.context.scale(3, 3)
    }

    // A reference to the internal instance is provided by this method
    public static get_instance(): Application {
        if(Application.instance == null) {
            // Create the singular instance
            Application.instance = new Application()
        }
        
        // Always return the same static instance
        return Application.instance
    }

    public update(): void {
        for(let entity of this.state.entities) {
            entity.update(this.state)
        }

        this.state.entities = this.state.entities.filter(
            function (entity: Entities.Entity): boolean {
                return entity.position.dist(new Vector2.Vector2()) < 320
            }
        )

        if(this.state.entities.length == 0) {
            this.state.entities = this.state.populator.next()
        }

        this.draw()
    }

    public draw(): void {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        for(let entity of this.state.entities) {
            entity.draw(this.context)
        }
    }
}

document.body.onload = function() {
    const app: Application = Application.get_instance()

    function main_loop(): void {
        app.update()
        requestAnimationFrame(main_loop)
    }

    main_loop()
}