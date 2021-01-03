class Stringer{
    constructor(innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(num){
        return this.innerLength += num;
    }

    decrease(num){
        if(this.innerLength - num < 0){
            return this.innerLength = 0;
        }

        return this.innerLength -= num;
    }

    toString(){
        if(this.innerLength == 0){
            return '...';
        }else if(this.innerString.length > this.innerLength){
            return this.innerString.slice(0,this.innerString.length - this.innerLength) + '...';
        } else {
            return this.innerString;
        }
    }
}