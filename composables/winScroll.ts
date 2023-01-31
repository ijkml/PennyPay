function usePageScroll() {
  const win = typeof window !== 'undefined' ? window : undefined;

  if (!win) {
    return {
      x: ref(0),
      y: ref(0),
    };
  }

  const x = ref(win.pageXOffset);
  const y = ref(win.pageYOffset);

  useEventListener(
    win,
    'scroll',
    () => {
      x.value = win.pageXOffset;
      y.value = win.pageYOffset;
    },
    {
      capture: false,
      passive: true,
    }
  );

  return { x, y };
}

export { usePageScroll };
