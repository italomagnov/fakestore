<script setup>
import { PhShoppingBag } from '@phosphor-icons/vue';
import Cart from '../../cart/Cart.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const toggleCart = ref(false);

function handleShowCart() {
    toggleCart.value = !toggleCart.value;
}

const store = useStore();

const totalItems = computed(() => store.state.cart.cart.length);
</script>

<template>
    <nav class="w-full flex items-center justify-between">
        <RouterLink to="/">
            <h1 class="font-saira-stencil-one text-5xl text-gray-600">
                fakestore
            </h1>
        </RouterLink>
        <div class="relative flex items-center gap-6">
            <ph-shopping-bag
                size="24"
                class="text-gray-500 cursor-pointer"
                @click="handleShowCart"
            />
            <span
                class="absolute bottom-0 left-3 top-3 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] text-center"
                >{{ totalItems }}</span
            >
            <Cart :toggle="toggleCart" />
        </div>
    </nav>
</template>
