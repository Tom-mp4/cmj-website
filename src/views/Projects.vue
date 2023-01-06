<template>
  <div class="projects">
    <Navbar />
    <Landing />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Landing from '@/components/Projects/Landing.vue';

export default {
  name: 'Home',
  components: {
    Landing,
    Navbar,
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
