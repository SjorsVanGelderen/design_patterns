/*
    Singleton pattern
    Creational pattern
    Copyright 2017, Sjors van Gelderen
*/

class Singleton {
    private static instance: Singleton = new Singleton() // Singleton instance

    private constructor() {
        // The singleton instance cannot be instantiated from outside
    }

    // A reference to the internal instance is provided by this method
    public static get_instance(): Singleton {
        return Singleton.instance
    }
}