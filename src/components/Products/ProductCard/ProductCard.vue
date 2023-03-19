<script>
import { mapActions } from 'vuex';
export default {
    computed: {
        ...mapActions(['addProduto']),
    },
    methods: {
        addCarrinho() {
            this.$store.commit('addProduto', this.produto);
        },
    },
    props: ['produto', 'price'],
};
</script>

<template>
    <div class="w-64 shadow-lg">
        <div
            class="w-full h-full font-saira rounded-lg"
            :key="produto.id"
        >
            <img
                class="w-full"
                :src="produto.image"
                :alt="produto.name"
            />

            <div class="bg-white flex flex-col gap-2 px-3 py-2">
                <p class="font-light text-gray-500 text-sm truncate">
                    {{ produto.name }}
                </p>
                <span class="text-xs font-semibold"
                    >Qntd em Estoque: {{ produto.stock_amount }}</span
                >
                <div class="h-[1px] w-4/5 mx-auto bg-gray-200"></div>
                <div class="flex items-center justify-between">
                    <span class="font-semibold text-sm text-gray-900">{{
                        price
                    }}</span>

                    <button
                        @click="addCarrinho()"
                        class="bg-gray-500 text-xs p-2 text-gray-50 hover:bg-opacity-60"
                    >
                        COMPRAR
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
