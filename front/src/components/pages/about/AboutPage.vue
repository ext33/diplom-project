<template>
  <div id="cancel-signup-page">
    <Nav/>
    <InfoContainer/>
    <Footer/>
  </div>
</template>

<script>
  import InfoContainer from "@/components/pages/about/InfoContainer";
  import Nav from "@/components/ui/Nav";
  import Footer from "@/components/ui/Footer";
  
  export default {
    name: "AboutPage",
    components: {Footer, Nav, InfoContainer},
  }
</script>

<style scoped>

</style>