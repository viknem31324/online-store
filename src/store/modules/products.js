import axios from "axios";

export default {
    actions: {
        async axioProductsList(ctx) {
            const ref = await axios.get("https://fakestoreapi.com/products");
            const products = ref.data;
            ctx.commit("updateProductsList", products);
        },
        addCart(ctx, cart) {
            ctx.commit("updateCartList", cart);
        },
        appendCount(ctx, item) {
            ctx.commit("appendCount", item);
        },
        prependCount(ctx, item) {
            ctx.commit("prependCount", item);
        },
        createCartList(ctx){
            let pars = JSON.parse(localStorage.getItem("cartList"));
            ctx.commit("createCartList", pars);
        },
    },
    mutations: {
        createCartList(state, pars){
            if(pars){
                state.cartList = pars;
            }
        },
        updateProductsList(state, products) {
            state.products = products;
        },
        updateCartList(state, cart) {
            let item = state.cartList.find(item => item.cart.id === cart.p.id);
            if (item == undefined) {
                state.cartList.push({ cart: cart.p, count: cart.count })
            } else {
                item.count += Number(cart.count);
            }
            localStorage.setItem("cartList", JSON.stringify(state.cartList));
            let pars = JSON.parse(localStorage.getItem("cartList"));
            console.log(pars)
        },
        appendCount(state, product) {
            let el = state.cartList.find(item => item.cart.id === product.id);

            if (el.count < 100) {
                el.count++;
                if (el.count <= 1) {
                    el.count = 1;
                }
            } else el.count = 100;
            localStorage.setItem("cartList", JSON.stringify(state.cartList));
            let pars = JSON.parse(localStorage.getItem("cartList"));
            console.log(pars)
        },
        prependCount(state, product) {
            let el = state.cartList.find(item => item.cart.id === product.id);
            if (el.count > 1) {
                if (el.count > 100) {
                    el.count = 100;
                }
                el.count--;
            }
            localStorage.setItem("cartList", JSON.stringify(state.cartList));
            let pars = JSON.parse(localStorage.getItem("cartList"));
            console.log(pars)
        }
    },
    state: {
        products: [],
        cartList: [],
    },
    getters: {
        getPriceAllCart(state) {
            let sum = 0;
            if (state.cartList.length === 0) {
                return sum;
            } else {
                for (let i = 0; i < state.cartList.length; i++) {
                    if (state.cartList[i].count <= 0) {
                        sum += state.cartList[i].cart.price;
                    }
                    for (let j = 0; j < state.cartList[i].count; j++) {
                        sum += state.cartList[i].cart.price;
                        if (j >= 99) break;
                    }
                }
                return sum.toFixed(2);
            }
        },
        getCartCount(state) {
            return state.cartList.length;
        },
        getCartList(state) {
            return state.cartList;
        },
        getProductsList(state) {
            return state.products;
        },
        getTopProducts(state) {
            return state.products.filter(x => x.rating.rate > 4)
        },
        createdDay() {
            let day = new Date().getDate();
            let month = () => {
                let month = new Date().getMonth() + 1;
                if (month <= 9) return '0' + month
                else return month;
            }
            let year = new Date().getFullYear();
            return day + ' ' + month + ' ' + year;
        },
    },
}