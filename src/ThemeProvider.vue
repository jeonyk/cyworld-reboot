<template>
  <div id="theme-provider">
    <theme-provider :theme="theme">
      <slot></slot>
    </theme-provider>
  </div>
</template>

<script>
import { ThemeProvider } from "vue-styled-components";
import theme from "./theme";

export default {
  name: "CustomThemeProvider",
  components: {
    "theme-provider": ThemeProvider,
  },
  data: function() {
    return { theme };
  }
};
</script>
