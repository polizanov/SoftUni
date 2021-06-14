class Box<T> {
    private boxes = [];

    public add(el: T): void{
        this.boxes.push(el);
    }

    public remove(): void {
        this.boxes.shift();
    }

    public get count() {
        return this.boxes.length
    }
}

