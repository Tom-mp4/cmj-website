<template>
  <div class="home">
    <Navbar class="navbar" />
    <Landing />
    <div>
      <Projects class="projects" />
      <Team />
    </div>
    <MemberAction />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Landing from '@/components/Home/Landing.vue';
import Projects from '@/components/Home/Projects.vue';
import Team from '@/components/Home/Team.vue';
import MemberAction from '@/components/Home/MemberAction.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Landing,
    Navbar,
    Projects,
    Team,
    MemberAction,
    Footer,
  },
};
</script>

<style lang="scss" scoped>

  .home {
    display: flex;
    flex-direction: column;
    align-items: center;

    .navbar {
      position: fixed;
      top: 3rem;
    }
  }

</style>
