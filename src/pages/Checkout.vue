<script setup>
import InputDate from '../components/InputPaymentDate/InputDate.vue';
import PaymentCart from '../components/PaymentCart/PaymentCart.vue';
import InputPaymentType from '../components/InputPaymentType/InputPaymentType.vue';
import TheHeader from '../components/Header/TheHeader.vue';
</script>

<template>
    <TheHeader />
    <section class="h-screen bg-gray-100 font-saira">
        <div class="max-w-5xl mx-auto pt-8 flex flex-col justify-between gap-4">
            <div class="w-full flex justify-between gap-8">
                <InputDate />
                <PaymentCart />
            </div>

            <InputPaymentType />

            <button
                class="w-full px-8 py-4 text-base font-semibold text-white mt-2 bg-green-600 hover:bg-green-700"
            >
                Confirmar Compra
            </button>
        </div>
    </section>
</template>
