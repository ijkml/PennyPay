const [menuIsOpen, toggleMmenu] = useToggle();

function closeMmenu() {
  menuIsOpen.value = false;
}

function openMmenu() {
  menuIsOpen.value = true;
}

export { menuIsOpen, toggleMmenu, openMmenu, closeMmenu };
