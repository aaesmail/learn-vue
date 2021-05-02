import { ref } from 'vue';

export default () => {
  const alertIsVisible = ref(false);

  const showAlert = () => {
    alertIsVisible.value = true;
  };

  const hideAlert = () => {
    alertIsVisible.value = false;
  };

  return [alertIsVisible, showAlert, hideAlert];
};
