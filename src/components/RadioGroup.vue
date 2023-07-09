<template>
  <div class="styled_radiogroup">
    <v-radio-group v-model="radioSelected" @change="onChange">
      <slot name="radios"></slot>
    </v-radio-group>
  </div>
</template>

<script>
  export default {
    props: [ 'radiogroup' ],
    data () {
      let selectedNum = this.radiogroup;
      return {
        radioSelected: selectedNum,

      }
    },
    methods: {
      onChange() {
        this.$emit('change', this.radioSelected)
      }
    }
  }
</script>

<style lang="scss">
.styled_radiogroup{
  .v-input--selection-controls{
    margin-top: 0;
    padding-top: 0;
    .v-input__control{
      .v-input__slot{
        margin-bottom: 0;
      }
      .v-messages{
        display: none;
      }
    }
  }
}
</style>