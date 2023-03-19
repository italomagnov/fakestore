<script setup>
import ProductCard from './ProductCard/ProductCard.vue';
import axios from 'axios';
import { ref } from 'vue';

const products = ref([]);

axios
    .get(
        'https://my-json-server.typicode.com/jusbrasil/hackathon-laboratoria/products'
    )
    .then((response) => (products.value = response.data));

const numeroPreco = (valor) => {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
};
</script>

<template>
    <section class="bg-gray-100 px-8">
        <div class="max-w-5xl mx-auto pt-8">
            <h1 class="font-semibold">TODOS OS PRODUTOS</h1>
            <div
                class="flex flex-wrap items-start justify-start gap-8 py-4 max-md:justify-center"
            >
                <ProductCard
                    v-for="product in products"
                    :key="product.id"
                    :produto="product"
                    :price="numeroPreco(product.price)"
                />
            </div>
        </div>
    </section>
</template>
