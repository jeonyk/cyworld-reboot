<template>
  <div class="styled_dropdown" :style='style'>
    <v-list>
      <v-list-group v-model="value">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>
              {{items}}
            </v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item-group v-model="selectedItem">
          <slot name="subitems"></slot>
        </v-list-item-group>
      </v-list-group>
    </v-list>
  </div>
</template>

<script>
export default {
  props: [
      'mt',
      'items',
      'value'
  ],
  data: () => ({
    selectedItem: 0,
  }),
  computed: {
    style () {
      return 'margin-top: ' + this.mt + 'px';
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
.styled_dropdown{
  padding: 0 4px;
  .v-list{
    overflow: hidden;
    border: solid 1px rgba(0, 0, 0, 0.12) !important;
    border-radius: 8px !important;
    padding: 0;

    .v-list-group__header{
      padding: 0 17px;
      min-height: unset;
      height: 40px;

      background: url('/img/svg/ico_down.svg') no-repeat 100% 50% /24px 24px;
      background-position-x: calc(100% - 11px);
      &::before{
        display: none;
      }

      &:hover{
        background-color: rgba(243, 107, 43, 0.04);
      }

      &.v-list-item--active{
        color: rgba(0, 0, 0, 0.2);
        background-color: #f6f6f6;
        background-image: url('/img/svg/ico_up.svg');
      }

      .v-list-item__content{
        padding: 0;
        height: 38px;
        line-height: 38px;
        .v-list-item__title{
          font-size: 13px;
          color: rgba(0, 0, 0, 0.5);
        }
      }

      .v-list-item__icon{
        display: none;
      }

      .v-ripple__container{
        .v-ripple__animation{
          background-color: #f36b2b;
          opacity: 0.02 !important;
        }
      }
    }

    .v-list-group__items{
      .v-list-item{
        min-height: unset;
        height: 40px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.04);
        &::before{
          display: none;
        }

        &:hover{
          background-color: rgba(243, 107, 43, 0.04);
        }

        &.v-list-item--active{
          background-color: #fff;
          &:hover{
            background-color: rgba(243, 107, 43, 0.04);
          }
          .v-list-item__subtitle{
            color: #F36B2B;
          }
        }

        .v-list-item__subtitle{
          font-size: 13px;
          font-weight: 300;
          color: rgba(0, 0, 0, 0.7) ;
        }

        .v-ripple__container{
          .v-ripple__animation{
            background-color: #f36b2b;
            opacity: 0.02 !important;
          }
        }
      }
    }
  }
}
</style>
