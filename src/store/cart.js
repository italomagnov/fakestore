export default {
    state: {
        cart: [],
    },
    mutations: {
        addProduto(state, payload) {
            const produto = state.cart.find((item) => item.id === payload.id);
            if (produto === undefined) {
                state.cart.push({ ...payload, quantidade: 1 });
            } else {
                produto.quantidade++;
            }
        },
        removeProduct(state, id) {
            const produto = state.cart.find(({ id: pid }) => pid === id);
            if (produto !== undefined) {
                produto.quantidade--;
                if (produto.quantidade === 0) {
                    state.cart = state.cart.filter(({ id: pid }) => pid !== id);
                }
            }
        },
    },
    actions: {
        addProduto({ commit }, payload) {
            commit('addProduto', payload);
        },
        removeProduct({ commit }, id) {
            commit('removeProduct', id);
        },
    },
    getters: {},
};
