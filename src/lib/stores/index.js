import { writable } from 'svelte/store';

export const toast = writable({
  visible: false,
  title: '',
  content: '',
  type: '',
  duration: 3000,
});
