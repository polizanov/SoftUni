class Employee {
    public salary : number;
    public tasks : string[];

    constructor(public name : string, public age : number){
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    public work() : void {
        let curTask : string = this.tasks.shift();
        console.log(this.name + ` ${curTask}`);
        this.tasks.push(curTask);
    }

    public getSalary() : number {
        return this.salary;
    }

    public collectSalary() : void {
        console.log(`${this.name} received ${this.getSalary()} this month.`)
    }
}

class Junior extends Employee {
    constructor(public name : string, public age : number){
        super(name, age);
        this.tasks.push("is working on a simple task.");
    }
}

class Senior extends Employee {
    constructor(public name : string, public age : number){
        super(name, age);
        this.tasks.push("is working on a complicated task.");
        this.tasks.push("is taking time off work.");
        this.tasks.push("is supervising junior workers.");
    }
}

class Menager extends Employee {
    public bonus : number;
    constructor(public name : string, public age : number){
        super(name, age);
        this.bonus = 0;
        this.tasks.push('scheduled a meeting.');
        this.tasks.push('is preparing a quarterly report.')
    }

    public collectSalary() : void {
        console.log(`${this.name} received ${this.getSalary() + this.bonus} this month.`)
    }
}