<template>
  <v-list-item class="styled_item" @click="onClick" :link="link" :to="to">
    <v-list-item-content>
      <v-list-item-title v-if="primary" v-text="primary"></v-list-item-title>
      <v-list-item-subtitle v-if="secondary" v-text="secondary"></v-list-item-subtitle>
      <slot />
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: [
    'primary',
    'secondary', 
    'link',
    'to'
  ],
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
.styled_item{
  &.v-list-item{
    min-height: unset;
    overflow: hidden;
    padding: 20px 60px 20px 18px;
    font-family: 'GothicNeoaUni';
    background: url('/img/svg/ico_link.svg') no-repeat 100% 50% /24px 24px;
    background-position-x: calc(100% - 16px);

    &.v-list-item.item_find{
      margin-top: 8px;
      border: 1px solid rgba(0, 0, 0, 0.12);
      border-radius: 12px;
      .v-list-item__subtitle{
        padding-top: 10px;
        line-height: inherit;
        overflow: visible;
        white-space: pre-line;
      }
    }
    &:hover::before{
      opacity: 0;
    }
    &:focus::before{
      opacity: 0;
    }
    @media (hover: hover) { // pc에서만 적용
      &:hover::before{
        color: rgb(243, 107, 43, 1);
        opacity: 0.04;
      }
      &:focus::before{
        color: rgb(243, 107, 43, 1);
        opacity: 0.12;
      }
    }
    &.v-list-item--link:before{
      top: 50%;
      transform: translateY(-50%);
      left: 16px;
      background-color: transparent;
    }
    .v-list-item__content{
      padding: 0;
      .v-list-item__title{
        font-size: 16px;
        font-weight: 400;
        color: rgba(0,0,0,0.9);
      }
      .v-list-item__subtitle{
        font-size: 13px;
        font-weight: 300;
        color: rgba(0,0,0,0.7);
      }
    }
  }
  .v-ripple__animation{
    color: rgba(243, 107, 43, 1);
  }
}
</style>