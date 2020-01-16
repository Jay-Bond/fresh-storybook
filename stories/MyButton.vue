<template>
  <button>
    <slot></slot>
  </button>
</template>
<script>
  export default {
    name: 'MyButton',
  };
</script>

<style lang="scss">
  @import './src/assets/styles/_variables.scss';

  button{
    padding: 6px 10px;
    background-color: $secondary-color;
    color: white;
    border: none;
    &:hover{
      background-color: darken($secondary-color, 15%);
    }
  }
</style>