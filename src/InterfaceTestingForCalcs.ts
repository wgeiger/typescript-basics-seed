interface CalculationItem{
    getYearlyPrice():number
}

class PluginHybidCalcItem implements CalculationItem{
    electricPrice = .07;
    constructor (private avgDailyMiles:number,private electicRange: number, private electricTank:number, private mpg:number,private tankSize:number){
        
    }

    getYearlyPrice(): number {
        if(this.electicRange>this.avgDailyMiles){
            

            // return this.electricPrice*
        }
        throw new Error("Method not implemented.");
    }
    
}

let calcs:Array<CalculationItem>

calcs.push(new PluginHybidCalcItem(22,38,16,45,10));

let total=0;
for(let calcItem of calcs){
    total += calcItem.getYearlyPrice();
}

console.log(total);