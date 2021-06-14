class Melon {
    constructor(public weight: number, public melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort
    }

    public elementIndex(): number {
        let melonLength: number = Number(this.melonSort.length)
        return this.weight * melonLength
    }
}

class Watermelon extends Melon {
    public toString(): string {
        return [`Element: Water`, `Sort: ${this.melonSort}`, `Element Index: ${this.elementIndex()}`].join("\n")
    }
}

class Firemelon extends Melon {
    public toString(): string {
        return [`Element: Fire`, `Sort: ${this.melonSort}`, `Element Index: ${this.elementIndex()}`].join("\n")
    }
}

class Earthmelon extends Melon {
    public toString(): string {
        return [`Element: Earth`, `Sort: ${this.melonSort}`, `Element Index: ${this.elementIndex()}`].join("\n")
    }
}

class Airmelon extends Melon {
    public toString(): string {
        return [`Element: Air`, `Sort: ${this.melonSort}`, `Element Index: ${this.elementIndex}`].join("\n")
    }
}

let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());




