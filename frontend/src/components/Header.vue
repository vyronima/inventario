<template>
    <div class="container">        
        <div class="container_header">
            <h2 class="titulo">Modulo de {{titulo}}</h2>            
        </div>
    </div>
</template>

<script setup>
        defineProps({
        titulo: String
        
        })
</script>
<style scoped>
        .container{
            margin-bottom: 10px;
        }

        .container_header{
            display: flex;
            justify-content: space-between;
            padding: 0px;
        }
</style>