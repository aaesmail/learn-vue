<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue';

export default {
  props: ['firstName', 'lastName'],

  //   emits: ['save-data'],

  setup(props, context) {
    const userName = computed(() => props.firstName + ' ' + props.lastName);

    console.log(context);

    const age = inject('userAge');

    // context.emit('save-data', 1);

    onBeforeMount(() => {
      console.log('onBeforeMount');
    });

    onMounted(() => {
      console.log('onMounted');
    });

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });

    onUpdated(() => {
      console.log('onUpdated');
    });

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });

    onUnmounted(() => {
      console.log('onUnmounted');
    });

    return {
      userName,
      age
    };
  }
};
</script>
