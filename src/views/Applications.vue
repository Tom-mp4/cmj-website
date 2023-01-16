<template>
  <div class="applications">
    <Navbar />
    <Landing />
    <Steps />
    <Illustration />
    <Footer />
  </div>
</template>

<script>
import Landing from '@/components/Applications/Landing.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Steps from '@/components/Applications/Steps.vue';
import Illustration from '@/components/Applications/Illustration.vue';

export default {
  name: 'Applications',
  components: {
    Steps,
    Navbar,
    Landing,
    Illustration,
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
