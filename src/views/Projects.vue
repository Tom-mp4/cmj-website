<template>
  <div class="projects">
    <Navbar />
    <Landing />
    <Competences />
    <Presenting />
    <Informations />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Landing from '@/components/Projects/Landing.vue';
import Competences from '@/components/Projects/Competences.vue';
import Presenting from '@/components/Projects/Presenting.vue';
import Informations from '@/components/Projects/Informations.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Landing,
    Competences,
    Presenting,
    Informations,
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
