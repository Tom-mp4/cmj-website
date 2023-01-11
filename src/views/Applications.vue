<template>
  <div class="applications">
    <Navbar />
    <Landing />
    <Footer />
  </div>
</template>

<script>
import Landing from '@/components/Applications/Landing.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Applications',
  components: {
    Navbar,
    Landing,
    Footer,
  },
};
</script>

<style scoped lang="scss">

.applications {
  display: flex;
  flex-direction: column;
  align-items: center;

  .navbar {
    position: fixed;
    top: 3rem;
  }
}

</style>
