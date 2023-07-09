export default function commonHeader() {
  if (this.$store.getters.token) {
    console.log('Bearer ' + this.$store.getters.token)
    return { Authorization: 'Bearer ' + this.$store.getters.token }
  } else {
    return {}
  }
}
