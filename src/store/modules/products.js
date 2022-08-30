import axios from "axios";

export default {
    actions: {
        async axioProductsList(ctx) {
            const ref = await axios.get("https://fakestoreapi.com/products");
            const products = ref.data;
            ctx.commit("updateProductsList", products);
        },
        async sendFormServ(form) {
            await axios.post("https://fakestoreapi.com/products", {
                form: form,
            }).catch(e => { this.error.push(e) });
        },
        addFeedback(ctx, feed) {
            ctx.commit("updateFeedback", feed);
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
        createCartList(ctx) {
            let pars = JSON.parse(localStorage.getItem("cartList"));
            ctx.commit("createCartList", pars);
        },
    },
    mutations: {
        updateFeedback(state, feed) {
            state.feedback.push(feed);
        },
        clearCartList(state) {
            state.cartList = [];
            localStorage.setItem("cartList", JSON.stringify(state.cartList));
        },
        createCartList(state, pars) {
            if (pars) {
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
        feedback: [
            {
                name: "UserName1",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias culpa dicta eligendi, exercitationem impedit nisi? Adipisci animi aspernatur assumenda delectus et explicabo fugiat ipsa itaque molestias necessitatibus placeat, rem",
                date: "29 02 2020",
            },
            {
                name: "UserName2",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias culpa dicta eligendi, exercitationem impedit nisi? Adipisci animi aspernatur assumenda delectus et explicabo fugiat ipsa itaque molestias necessitatibus placeat, rem",
                date: "29 02 2020",
            },
        ],
    },
    getters: {
        getFeedback(state) {
            return state.feedback;
        },
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
        getMensProducts(state) {
            return state.products.filter(x => x.category === "men's clothing");
        },
        getJeweleryProducts(state){
            return state.products.filter(x => x.category === "jewelery");
        },
        getElectronicsProducts(state){
            return state.products.filter(x => x.category === "electronics");
        },
        getWomensProducts(state){
            return state.products.filter(x => x.category === "women's clothing");
        },
        createdDay() {
            return (new Date().getDate()) + ' ' + ((new Date().getMonth() + 1) <= 9 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)) + ' ' + (new Date().getFullYear());
        },
    },
}