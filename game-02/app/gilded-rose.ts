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

    updateQuality() {
        const modQuality = (item, quality, condicion) => {
            (item.quality < condicion) ? item.quality += quality :  item.quality = 50 
        }

        let itemsLegends = {
            'Aged Brie': (item, fun) => {
                fun(item, 1, 50)
                --item.sellIn
            },
            'Sulfuras': item => item.quality = 80,
            'Backstage passes': (item, fun) =>{
                if(item.sellIn > 1){
                    --item.sellIn
                    if(item.sellIn < 6 ){
                        fun(item, 3, 48)
                    }else if(item.sellIn < 11 ){
                        fun(item, 2, 49)
                    }
                }else{
                    item.quality = 0
                    --item.sellIn
                }
            }
        }

        for (let i = 0; i < this.items.length; i++) {
            if(this.items[i].name.search('conjured') !== -1 ){
                this.items[i].quality -= 2
                --this.items[i].sellIn
            } else {
                if(this.items[i].name in itemsLegends){
                    itemsLegends[this.items[i].name](this.items[i], modQuality ) 
                } else {
                    this.items[i].quality -= 1
                    --this.items[i].sellIn
                }
            }
        }
        return this.items;
    }
}
