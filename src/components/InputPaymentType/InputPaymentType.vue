<script setup></script>

<template>
    <div class="flex flex-col gap-4">
        <h2 class="font-semibold text-lg">Método de Pagamento</h2>
        <div class="w-full flex justify-around bg-white px-8 py-4">
            <div class="flex gap-2">
                <input
                    id="cc"
                    type="checkbox"
                    value="Cartão de Crédito"
                />
                <label for="cc">Cartão de Crédito</label>
            </div>
            <div class="flex gap-2">
                <input
                    id="debito"
                    type="checkbox"
                    value="Cartão de Crédito"
                />
                <label for="debito">Cartão de Débito</label>
            </div>
            <div class="flex gap-2">
                <input
                    id="pix"
                    type="checkbox"
                    value="Cartão de Crédito"
                />
                <label for="pix">Pix</label>
            </div>
        </div>
    </div>
</template>
