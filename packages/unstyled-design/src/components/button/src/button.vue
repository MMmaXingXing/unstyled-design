<script setup>
import ButtonProps from "./button.type.ts";

withDefaults(defineProps<ButtonProps>({}), {});
</script>

<template>
  <div>
    <slot>{{ text }}</slot>
  </div>
</template>