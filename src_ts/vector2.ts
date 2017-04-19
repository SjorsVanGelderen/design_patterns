/*
    Very simple 2D vector class
    Copyright 2017, Sjors van Gelderen
*/

export class Vector2 {
    public x: number
    public y: number

    constructor(x: number = 0, y: number = 0) {
        this.x = x
        this.y = y
    }

    public add(vector: Vector2): void {
        this.x += vector.x
        this.y += vector.y
    }

    public sub(vector: Vector2): void {
        this.x -= vector.x
        this.y -= vector.y
    }

    public mul(scalar: number): void {
        this.x *= scalar
        this.y *= scalar
    }

    public mag(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }

    public norm(): void {
        const mag: number = this.mag()
        this.x /= mag
        this.y /= mag
    }

    public dist(vector: Vector2): number {
        return new Vector2(vector.x - this.x, vector.y - this.y).mag()
    }
}