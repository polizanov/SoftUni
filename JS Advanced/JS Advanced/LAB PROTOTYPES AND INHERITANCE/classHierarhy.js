function classHierarchy() {
    class Figure {
        constructor(units = "cm") {
            this.units = units;
        }

        get area() {
            return this.area;
        }

        changeUnits(value) {
            if (value == 'm' || value == "cm" || value == "mm") {
                this.units = value;
            }
        }

        validateParams(value) {
            switch (this.units) {
                case "cm":
                    return value;
                case "mm":
                    return value * 10;
                case "m":
                    return value * 100;
            }
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(r, units) {
            super(units);
            this._radius = r;
        }

        get area() {
            return Math.PI * this.radius ** 2;
        }

        get radius() {
            return this.validateParams(this._radius)
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }

    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }

        get width() {
            return this.validateParams(this._width);
        }

        get height() {
            return this.validateParams(this._height);
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}





