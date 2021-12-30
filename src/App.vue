<template>
  <div
    class="
      w-screen
      h-screen
      bg-gradient
      flex
      justify-center
      items-center
      overflow-hidden
    "
  >
    <router-view />
  </div>
</template>

<style>
.bg-gradient {
  background: linear-gradient(180deg, #d6c675 0%, #0e8658 100%);
}
</style>