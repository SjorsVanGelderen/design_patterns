/*
    Option and visitor pattern
    Behavioral patterns
    Copyright 2017, Sjors van Gelderen
*/

export interface IOptionVisitor<T, U> {
    on_some<U>(value: T): U
    on_none<U>(): U
}

export interface IOption<T> {
    visit<U>(visitor: IOptionVisitor<T, U>): U
}

export class Visitor implements IOptionVisitor<number, string> {
    public on_some(value: number): string {
        return "Visit on Some object: " + JSON.stringify(value)
    }

    public on_none(): string {
        return "Visit on None object"
    }
}

export class Some<T> implements IOption<T> {
    private value: T

    constructor(value: T) {
        this.value = value
    }
    
    public visit<U>(visitor: IOptionVisitor<T, U>): U {
        return visitor.on_some<U>(this.value)
    }
}

export class None<T> implements IOption<T> {
    public visit<U>(visitor: IOptionVisitor<T, U>): U {
        return visitor.on_none<U>()
    }
}