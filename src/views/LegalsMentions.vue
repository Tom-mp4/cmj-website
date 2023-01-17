<template>
  <div class="mention-legal">
    <Navbar />
    <Legals />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Legals from '@/components/legals/Legals.vue';

export default {
  name: 'LegalsMentions',
  components: {
    Navbar,
    Legals,
    Footer,
  },
};
</script>

<style lang="scss" scoped>

.mention-legal {
  display: flex;
  flex-direction: column;
  align-items: center;

  .navbar {
    position: fixed;
    top: 3rem;
  }
}

</style>
