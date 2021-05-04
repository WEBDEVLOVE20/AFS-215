class SupermarketCheckout{

    constructor(){
        this.value = {
            "A": 50,
            'B': 30,
            "C": 20,
            "D": 15
        }
    }

    numbersOfApples(par){
        const numOfApples = par.match(/A/g)
        if(numOfApples === null){
            return 0
        } else {
        return numOfApples.length
        }
    }
    numbersOfBerries(par){
        const numOfBerries = par.match(/B/g)
        if(numOfBerries === null){
            return 0
        } else {
            return numOfBerries.length
        }
    }


    checkout(val){

        let valuesContainer = []

        if((typeof val === 'number') || (typeof val !== 'string') || (val !== val.toUpperCase())){
            return -1
        } 
        if(this.numbersOfApples(val) >= 3){   
            valuesContainer.push((Math.floor((this.numbersOfApples(val)/3)) * 130) + ((this.numbersOfApples(val) % 3) * 50 ))
        } else if (this.numbersOfBerries(val) >= 2){
            valuesContainer.push((Math.floor((this.numbersOfBerries(val)/2)) * 45) + ((this.numbersOfBerries(val) %2) * 30))
        } else {
            for(let i = 0; i < val.length; i++){
                let letter = val[i]
                valuesContainer.push(this.value[letter])
            }
        }
        
        let result = valuesContainer.reduce((a, b) => a + b, 0)
        return result
        
    }
}

module.exports = SupermarketCheckout;