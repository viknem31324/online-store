import axios from "axios";

export default {
    actions: {
        async axioProductsList(ctx) {
            const ref = await axios.get("https://fakestoreapi.com/products");
            const products = ref.data;
            ctx.commit("updateProductsList", products);
        },
    },
    mutations: {
        updateProductsList(state, products) {
            state.products = products;
        },
    },
    state: {
        products: [],
    },
    getters: {
        getProductsList(state) {
            return state.products;
        },
        getTopProducts(state){
            return state.products.filter(x => x.rating.rate > 4)
        },
        createdDay() {
            let day = new Date().getDate();
            let month = ()=>{
                let month = new Date().getMonth() + 1;
                if(month <= 9) return '0' + month
                else return month;
            }
            let year = new Date().getFullYear();
            return day + ' ' + month + ' ' + year;
        },
    },
}