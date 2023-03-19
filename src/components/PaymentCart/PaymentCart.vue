<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
const store = useStore();

const itemsInCart = computed(() => store.state.cart.cart);

const total = computed(() => {
    let total = 0;
    itemsInCart.value.forEach((item) => {
        total += item.price * item.quantidade;
    });
    return total.toFixed(2);
});

const numeroPreco = (valor) => {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
};
</script>

<template>
    <div
        class="w-2/4 h-[386px] flex flex-col gap-4 max-md:flex-col max-md:w-full"
    >
        <h2 class="font-semibold text-lg">Itens no Carrinho</h2>
        <div class="w-full bg-white px-8 py-4 overflow-auto">
            <div
                v-for="item in itemsInCart"
                :key="item.id"
                class="flex flex-col"
            >
                <div class="flex items-center gap-4">
                    <img
                        class="w-36"
                        :src="item.image"
                        :alt="item.name"
                    />
                    <p>{{ item.name }}</p>
                </div>
                <div class="flex justify-between">
                    <span>Qntd: {{ item.quantidade }}</span>
                    <span>R$ {{ item.price }}</span>
                </div>
                <div class="w-full h-[1px] bg-gray-300 mt-2"></div>
            </div>
        </div>
        <span class="font-bold"
            >Valor total da compra: R$ {{ numeroPreco(total) }}</span
        >
    </div>
</template>
