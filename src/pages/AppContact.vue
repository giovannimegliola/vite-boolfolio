<template>
  <div class="container">
    <h1>Contact us</h1>
  </div>
  
  <ContactForm ></ContactForm>

</template>

<script>
import ContactForm from '../components/ContactForm.vue'
  export default {
    name: "AppContact",
    components: {
      ContactForm
    }
  }
</script>

<style lang="scss" scoped>

</style>