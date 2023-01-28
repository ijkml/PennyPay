<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <main class="px-4 py-10 text-center text-teal-7 dark:text-gray-2">
    <div class="text-4xl">
      <div class="i-carbon-warning inline-block" />
    </div>
    <div>Not found</div>
    <div>
      <button class="btn text-sm m-(3 t8)" @click="router.back()">Back</button>
    </div>
  </main>
</template>
