<template>
  <div class="projects">
    <div class="projects-cards">
      <Construction
        v-for="i in Array(constructions.length).keys()"
        v-bind:key = "i"
        :url="constructions[i].url"
        :imageUrl="constructions[i].imageUrl"
        :title="constructions[i].title"
        :description="constructions[i].description"/>
    </div>
  </div>
</template>

<script>
import Construction from '@/components/Projects/Construction.vue';
import dechet from '@/assets/image/dechet.jpg';
import bpte from '@/assets/image/bpte.jpg';

export default {
  name: 'Projects',
  components: {
    Construction,
  },
  data: () => ({
    constructions: [
      {
        url: 'https://www.sudouest.fr/pyrenees-atlantiques/saint-jean-pied-de-port/saint-jean-pied-de-port-forte-mobilisation-des-jeunes-garaztars-pour-l-operation-nettoyage-7088433.php',
        imageUrl: dechet,
        title: 'Semaine Européenne de la réduction des déchets',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc.',
      },
      {
        url: ' https://www.sudouest.fr/pyrenees-atlantiques/saint-jean-pied-de-port/saint-jean-pied-de-port-le-conseil-municipal-des-jeunes-lance-l-evenement-bouge-pour-ton-ete-10687097.php',
        imageUrl: bpte,
        title: 'Action Bouge pour ton été',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nunc nisl eu nunc.',
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
@use '@/assets/styles/_colors.scss';
@use '@/assets/styles/_fonts.scss';

.projects {
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-bottom: 10%;

  .projects-cards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;
    padding: 0 18vw;
  }
}

/* Responsive Design */

@media (max-width: 800px) {
  .projects {
    .projects-cards {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 15px;
    }
  }
}

</style>
