import { toast } from '$lib/stores';

export default (title = '', content = '', type = '', duration = 3000) => {
  toast.set({
    visible: true,
    title,
    content,
    type,
    duration,
  });
};
