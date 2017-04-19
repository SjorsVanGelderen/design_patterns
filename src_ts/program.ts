/*
    Copyright 2017, Sjors van Gelderen
*/

import * as State from "./state"

class Application {
    private state: State.State
    private canvas: HTMLCanvasElement
    private context: CanvasRenderingContext2D

    constructor() {
        this.state = new State.State()
        this.canvas = <HTMLCanvasElement>document.getElementById("canvas")
        this.context = this.canvas.getContext("2d")
        this.context.imageSmoothingEnabled = false
        this.context.scale(3, 3)
    }

    update(): void {
        for(let entity of this.state.entities) {
            entity.update(this.state)
        }

        this.draw()
    }

    draw(): void {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        for(let entity of this.state.entities) {
            entity.draw(this.context)
        }
    }
}


document.body.onload = function() {
    const app: Application = new Application()

    function main_loop(): void {
        app.update()
        requestAnimationFrame(main_loop)
    }

    main_loop()
}