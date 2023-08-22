<template>
  <div id="root">
    <es-router-view/>
  </div>
</template>

<script>
import {defineComponent} from '@vue/runtime-core';
import {DEBUG, useESLog} from "@extscreen/es3-log";

export default defineComponent({
  name: 'App',
  setup() {
    const log = useESLog()

    function onESCreate(app, params) {
      log.setMinimumLoggingLevel(DEBUG)
    }

    return {onESCreate};
  },
});

</script>

<style scoped>
#root {
  width: 1920px;
  height: 1080px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

</style>
