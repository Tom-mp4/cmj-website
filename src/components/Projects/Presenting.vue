<template>
  <div class="projects">
    <h1 class="title">
      Nos Projets.
    </h1>
    <div class="projects-cards">
      <Construction
        v-for="i in Array(constructions.length).keys()"
        v-bind:key = "i"
        :url="constructions[i].url"
        :imageUrl="constructions[i].imageUrl"
        :title="constructions[i].title"/>
    </div>
  </div>
</template>

<script>
import Construction from '@/components/Projects/Construction.vue';
import photos from '@/assets/image/photos.png';
import photos2 from '@/assets/image/photos-2.png';

export default {
  name: 'Projects',
  components: {
    Construction,
  },
  data: () => ({
    constructions: [
      {
        url: 'https://wwah.chat',
        imageUrl: photos,
        title: 'WWAH Chat',
      },
      {
        url: 'https://kortxo.fr',
        imageUrl: photos2,
        title: 'Site Web Kortxo',
      },
    ],
  }),
};
</script>

<style scoped lang="scss">

.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;

  .title {
    color: #fafafa;
  }

  .projects-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
    padding: 0 2rem;
  }
}

/* Responsive Design */

@media (max-width: 800px) {
  .projects {
    .title {
      font-size: 28px;
    }

    .projects-cards {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 15px;
    }
  }
}

</style>
