<template>
  <v-list class="styled_list" :disabled="disabled">
    <v-list-item-group>
      <slot name="items"></slot>
    </v-list-item-group>
  </v-list>
</template>

<script>
  export default {
    props: {
      disabled: Boolean
    },
    data: () => ({
      
    }),
  }
</script>

<style lang="scss">
.styled_list{
  &.v-list{
    display: block;
    padding: 0;
    position: relative;
    transition: unset;
  }
  &.v-list.list_find{
    margin-top: 32px;
  }
  .v-ripple__container{
    .v-ripple__animation{
      opacity: 0.04 !important;
    }
  }
}

</style>