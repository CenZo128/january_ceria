let Cookies = {
    container : ['Chocolate','Blueberry','Milk'],

    listCookies(){
        // for(let i = 0 ; i < this.container.length ; i++){
        //     console.log(this.container[i])
        // }
        this.container.forEach((cookie,index) => {
            console.log(`${index + 1}. ${cookie} cookies`)
        })
    },

    addCookies(cookie){
        this.container.push(cookie)
    },

    removeCookies(kue){
        let result;

        result = this.container.filter(cookie => cookie !== kue)
        this.container = result
    },

    updateCookies(kue,kueBaru){
        let result;

        result = this.container.map(cookie => {
            if(cookie === kue){
                cookie = kueBaru
                // console.log(cookie)
            }
            return cookie
        })

        this.container = result
    }
}

Cookies.addCookies('Muffin')
Cookies.addCookies('Strawberry')
Cookies.removeCookies('Blueberry')
Cookies.removeCookies('Chocolate')
Cookies.updateCookies('Muffin','Fruit')
Cookies.updateCookies('Strawberry','Pineapple')
Cookies.listCookies();
/**
 * 1. Chocolate cookies
 * 2. Blueberry cookies
 * 3. Milk cookies
 */