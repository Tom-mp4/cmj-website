<script setup>
</script>

<template>
  <div class="projects">
    <div class="left">
      <img class="photo" src="@/assets/image/photos-2.png" alt="récolte des déchets">
    </div>
    <div class="right">
      <h1 class="title">Les Jeunes du Conseil</h1>
      <p class="description">
        Le Conseil Municipal des Jeunes se compose d'une quinzaine de jeunes entre 11 et 18 ans,
        élue pour un mandat de deux ans par le Maire. Le CMJ favorise ainsi la concertation, entre
        les élus et les jeunes, reconnaissant ainsi le jeune comme citoyen à part entière.
      </p>
      <router-link class="button" to="/projets">
        Rencontrer les Conseillers
      </router-link>
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
  background-color: colors.$tertiary;
  color: colors.$tertiaryText;
  height: 100vh;

  .right {
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
      color: colors.$tertiary;
      background-color: colors.$tertiaryText;
      padding: 0.5em 1.7em;
      width: fit-content;
      font-size: 1.2rem;
      text-decoration: none;
      border-radius: 99px;
      border: 2px solid colors.$tertiaryText;
      transition: ease-in-out .2s;

      &:hover {
        color: colors.$tertiaryText;
        background-color: colors.$tertiary;
      }
    }
  }

  .left {
    width: 40%;

    .photo {
      width: 100%;
    }
  }
}

</style>
