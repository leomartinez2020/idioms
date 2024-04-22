<script setup>
import { ref, watch } from 'vue'

const count = ref(0)

const items = ref([
  { id: 1, message: 'Cut corners', url: 'https://english22.s3.amazonaws.com/quick-cut-corners.png' },
  { id: 2, message: 'Take it easy', url: 'https://english22.s3.amazonaws.com/quick-take-easy.png' },
  { id: 3, message: 'Call the shots', url: 'https://english22.s3.amazonaws.com/quick-call-shots.png' },
  { id: 4, message: 'Call it a day', url: 'https://english22.s3.amazonaws.com/quick-call-a-day.png' },
  { id: 5, message: 'Out of the blue', url: 'https://english22.s3.amazonaws.com/quick-out-of-blue.png' },
  { id: 6, message: 'Spill the beans', url: 'https://english22.s3.amazonaws.com/quick-spill-beans.png' },
  { id: 7, message: 'Break the ice', url: 'https://english22.s3.amazonaws.com/quick-break-ice.png' },
  { id: 8, message: 'Piece of cake', url: 'https://english22.s3.amazonaws.com/quick-piece-cake.png' },
  { id: 9, message: 'Too little too late', url: 'https://english22.s3.amazonaws.com/quick-too-little-too-late.png' },
  { id: 10, message: 'Cut to the chase', url: 'https://english22.s3.amazonaws.com/quick-cut-chase.png' }
])

function showNext() {
  count.value++
  item[count]
}

function showPrevious() {
  count.value--
  item[count]
}

watch(count, () => {
  if (count.value < 0) {
    count.value = 0
  }
  if (count.value > items.value.length) {
    count.value = items.value.length - 1
  }
})

</script>

<template>
  <div class="container ml-5">
    <h1 class="text-3xl font-bold underline">English Idioms</h1>
    <div>
      <button @click="showPrevious" class="m-1 text-white bg-blue-700 rounded-lg px-5 py-2.5">Previous Item</button>
      <button @click="showNext" class="m-1 text-white bg-blue-700 rounded-lg px-5 py-2.5">Next Item</button>
      <div class="item">{{ items[count].id }}) {{ items[count].message }}</div>
      <div><img :src="items[count].url" /></div>
    </div>
  </div>
</template>

<style scoped>
.item {
  color: blue;
  font-size: 3em;
}
</style>
