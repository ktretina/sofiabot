<template>
  <div id="chatscreen">
     <iframe 
        class="responsive-iframe" 
        allow="microphone;"
        src="https://console.dialogflow.com/api-client/demo/embedded/55d7a7a5-1cf0-4c35-b34d-e7e719dfd664">
    </iframe>
  </div>
</template>

<script>

export default {
}

</script>

<style lang="scss" scoped>

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  align:center;
  padding-top: 10vh; 
}
</style>
