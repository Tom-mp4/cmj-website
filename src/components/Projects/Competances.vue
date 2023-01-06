<template>
  <div class="competences">
    <div class="items">
      <img src="@/assets/icons/world.svg" alt="world" class="competence-img">
      <p class="description">Des projets durables</p>
    </div>
    <div class="line"></div>
    <div class="items">
      <img src="@/assets/icons/followcollection.svg" alt="collective" class="competence-img">
      <p class="description">Des démarches collectives</p>
    </div>
    <div class="line"></div>
    <div class="items">
      <img src="@/assets/icons/search-location.svg" alt="search-location" class="competence-img">
      <p class="description">Une valorisation territorial</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Competances',
};
</script>

<style scoped lang="scss">
@use '@/assets/styles/_colors.scss';
@use '@/assets/styles/_fonts.scss';

.competences {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  gap: 10%;
  width: 70%;
  padding-bottom: 8%;

  .items {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    width: 25%;

    .competence-img {
      width: 80px;
    }

    .description {
      font-family: fonts.$montserrat;
      text-align: center;
      color: colors.$black;
      font-weight: bold;
      font-size: 1.3rem;
      line-height: 1;
    }
  }

  .line {
    width: 1.2px;
    height: 100px;
    background-color: colors.$hover;
  }
}

</style>
