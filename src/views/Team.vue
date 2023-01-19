<template>
  <div class="team">
    <Navbar />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Team',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped lang="scss">

.projects {
  display: flex;
  flex-direction: column;
  align-items: center;

  .navbar {
    position: fixed;
    top: 3rem;
  }
}

</style>
