<script setup>
import { RouterLink } from 'vue-router';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const shoppingCart = computed(() => store.state.cart.cart);

const removeProduct = (id) => store.dispatch('removeProduct', id);

function remove(id) {
    removeProduct(id);
}

defineProps({
    toggle: Boolean,
});

const total = computed(() => {
    let total = 0;
    shoppingCart.value.forEach((item) => {
        total += item.price * item.quantidade;
    });
    return total;
});

const numeroPreco = (total) => {
    return total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
};
</script>

<template>
    <div
        v-if="toggle === true"
        class="absolute top-1 right-6 w-80 p-8 bg-white border border-gray-500"
    >
        <div class="mb-4">
            <div class="overflow-auto h-72">
                <div
                    v-for="item in shoppingCart"
                    :key="item.id"
                    class="w-full flex flex-col justify-between mb-4"
                >
                    <div
                        class="w-full flex items-center justify-between text-sm"
                    >
                        <img
                            class="w-20"
                            :src="item.image"
                            :alt="item.name"
                        />
                        <div>
                            <p class="text-ellipsis text-justify w-40">
                                {{ item.name }}
                            </p>
                            <button
                                @click="remove(item.id)"
                                class="w-full bg-red-400 px-2 py-1 text-white mt-1"
                            >
                                remover
                            </button>
                        </div>
                    </div>

                    <div class="flex justify-between font-semibold py-2">
                        <span>Qntd: {{ item.quantidade }}</span>
                        <span>R$ {{ item.price }}</span>
                    </div>
                    <div class="w-full h-[1px] bg-gray-300"></div>
                </div>
            </div>

            <div
                class="flex flex-col"
                v-if="shoppingCart.length !== 0"
            >
                <span class="text-lg font-semibold pb-4"
                    >Total: R$ {{ numeroPreco(total) }}</span
                >
                <RouterLink
                    to="/checkout"
                    class="w-full bg-green-600 text-white px-4 py-2 hover:bg-green-800"
                    >Finalizar Compra</RouterLink
                >
            </div>
            <span
                v-else
                class="flex items-center justify-center"
                >Não há produtos no carrinho</span
            >
        </div>
    </div>
</template>
