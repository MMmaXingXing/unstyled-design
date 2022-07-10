<script setup lang="ts">
interface ButtonProps {
  text: string
}

withDefaults(defineProps<ButtonProps>(), {text: ''});
</script>

<template>
  <div>
    <slot>{{ text }}</slot>
  </div>
</template>