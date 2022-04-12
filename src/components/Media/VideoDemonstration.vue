<template>
  <div class="video-wrap">
    <video width="400" height="400" autoplay loop>
      <source :src="Src" type="video/mp4" />
    </video>
  </div>
</template>
<script>

export default {
  props: {
    Src: String,
  },
};
</script>
<style>

</style>
