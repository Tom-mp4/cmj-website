<template>
  <div class="projects">
    <Navbar />
    <Landing />
    <Competances />
    <Presenting />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Landing from '@/components/Projects/Landing.vue';
import Competances from '@/components/Projects/Competances.vue';
import Presenting from '@/components/Projects/Presenting.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Landing,
    Competances,
    Presenting,
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
