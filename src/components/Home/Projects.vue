<script setup>
</script>

<template>
  <div class="projects">
    <div class="left">
      <h1 class="title">Qui sommes nous ?</h1>
      <p class="description">
        Le Conseil Municipal des Jeunes de Saint-Jean-Pied-de-Port est un regroupement de jeunes
        qui souhaitent contribuer à la création d'une ville active et à apporter une vision jeune et
        dynamique au sein même de l'administration. Au travers de réunions, votes et idées
        spontanées, notre assemblée démocrative portent projets et initiatives qui permettent de
        pousser une voix jeune et nouvelle à travers la ville.
      </p>
      <router-link class="button" to="/projects">
        Découvrir nos Projets
      </router-link>
    </div>
    <div class="right">
      <img class="photo" src="@/assets/image/photos.png" alt="récolte des déchets">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/_colors.scss';
@use '@/assets/styles/_fonts.scss';

.projects {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background-color: colors.$secondary;
  color: colors.$secondaryText;
  height: 100vh;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    width: 40%;

    .title {
      font-family: fonts.$greycliff;
      font-size: 6rem;
      line-height: 0.8;
      letter-spacing: -0.06em;
    }

    .description {
      font-family: fonts.$montserrat;
      font-size: 1.3rem;
      line-height: 1.2;
    }

    .button {
      font-family: fonts.$montserrat;
      color: colors.$white;
      background-color: colors.$secondaryText;
      padding: 0.5em 1.7em;
      width: fit-content;
      font-size: 1.2rem;
      text-decoration: none;
      border-radius: 99px;
      border: 2px solid colors.$secondaryText;
      transition: ease-in-out .2s;

      &:hover {
        color: colors.$secondaryText;
        background-color: colors.$secondary;
      }
    }
  }

  .right {
    width: 40%;

    .photo {
      width: 100%;
    }
  }
}

</style>
