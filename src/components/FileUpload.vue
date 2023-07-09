<template>
  <div>
    <v-file-input
      class="input_file"
      :label='label'
      outlined
      flat
      persistent-hint
      :hint='hint'
    >
    </v-file-input>
  </div>
</template>

<script>
  export default {
    props: [ 'label', 'hint' ],
    data: () => ({
      files: [],
    }),
  }
</script>

<style lang="scss">
.input_file.v-text-field{
  /* icon */
  .v-input__prepend-outer{
    display: none;
  }
  /* form control */
  .v-input__control{
    .v-input__slot{
      padding: 0 16px !important;
      .v-file-input__text{
        display: none;
      }
      .v-input__append-inner{
        display: none;
      }

      fieldset{
        top: 0;
        border-radius: 12px;
        color: rgba(0, 0, 0, 0.12) !important;
        legend{
          display: none;
        }
      }
      .v-text-field__slot{
        background: url('/img/svg/ico_attach.svg') no-repeat 0 50% /24px 24px;
        .v-label{
          left: 28px !important;
          font-family: 'GothicNeoaUni';
          font-weight: 400;
          font-size: 15px;
          color: rgba(0,0,0,0.9) !important;
        }
        .v-label--active {
          transform: translateY(0) scale(1);
        }
      }
    }
  }
  /* hint */
  .v-text-field__details{
    margin-bottom: 0;
    padding: 0 4px;
    .v-messages__message{
      font-family: 'GothicNeoaUni';
      font-size: 12px;
      font-weight: 300;
      color: #808080;
    }
    .v-counter{
      font-family: 'GothicNeoaUni';
      font-size: 12px;
      font-weight: 300;
      color: #666;
    }
  }
}
</style>