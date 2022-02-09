export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }
    updateQuality(itemsLegends, modStates) {
        const conditionDecrementQuality = 0

        for (let i = 0; i < this.items.length; i++) {
            if(this.items[i].name.search('conjured') !== -1 ){
                modStates.decrementQuality(this.items[i], 2, conditionDecrementQuality)
                modStates.modSellin(this.items[i])
            } else {
                if(this.items[i].name in itemsLegends){
                    itemsLegends[this.items[i].name](this.items[i], modStates) 
                } else {
                    modStates.decrementQuality(this.items[i], 1, conditionDecrementQuality)
                    modStates.modSellin(this.items[i])
                }
            }
        }
        return this.items;
    }
}

export class ItemLegends{

    constructor(){
        this.itemsLegends = {
            'Aged Brie': (item, fun) => {
                fun.incrementQuality(item, 1, 50)
                fun.modSellin(item)
            },
            'sulfuras': (item, fun) => item.quality = 80,
            'Backstage passes': (item, fun) =>{
                if(item.sellIn > 1){
                    fun.modSellin(item)
                    if(item.sellIn < 6 ){
                        fun.incrementQuality(item, 3, 48)
                    }else if(item.sellIn < 11 ){
                        fun.incrementQuality(item, 2, 49)
                    }
    
                }else{
                    item.quality = 0
                    fun.modSellin(item)
                }
            }
        }
    }
}

export class UpdateStateItems{
    incrementQuality(item, quality, condition){
        (item.quality < condition) ? item.quality += quality :  item.quality = 50 
    }

    decrementQuality(item, quality, condition){
        (item.quality > condition) ? item.quality -= quality :  item.quality = 0
    }

    modSellin(item){
        --item.sellIn
    }
}

