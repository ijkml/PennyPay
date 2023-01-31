<template>
  <button
    type="button"
    class="ham-btn"
    aria-label="mobile navigation"
    aria-controls="app-sidebar-menu"
    :class="{ active: menuIsOpen }"
    :aria-expanded="menuIsOpen"
    @click="toggleMmenu()"
  >
    <span class="ham-cont">
      <span class="top" />
      <span class="middle" />
      <span class="bottom" />
    </span>
  </button>
</template>

<style scoped lang="scss">
.ham-cont {
  @apply overflow-hidden h-14px w-16px
    relative pointer-events-none;
}

.ham-btn {
  @apply flex justify-center items-center cursor-pointer
    focus:(outline-none) rounded-md w-9 h-9;

  &:where(:hover, :focus-visible) {
    @apply bg-zinc-5/20;

    .top {
      top: 0;
      transform: translateX(4px);
    }
    .middle {
      top: 6px;
      transform: translateX(0);
    }
    .bottom {
      top: 12px;
      transform: translateX(8px);
    }

    .top,
    .bottom,
    .middle {
      @apply bg-gray-800 left-0 dark:(bg-gray-4);
    }
  }

  &.active {
    .top {
      top: 6px;
      transform: translateX(0) rotate(225deg);
    }
    .middle {
      top: 6px;
      transform: translateX(16px);
    }
    .bottom {
      top: 6px;
      transform: translateX(0) rotate(135deg);
    }

    &:hover {
      .top,
      .middle,
      .bottom {
        transition: top 0.25s, background-color 0.25s, transform 0.25s;
      }
    }
  }
}

.top,
.middle,
.bottom {
  transition: top 0.25s, background-color 0.5s, transform 0.25s;

  @apply absolute w-16px h-2px bg-gray-600
    pointer-events-none dark:(bg-gray-300);
}
.top {
  top: 0;
  left: 0;
  transform: translateX(0);
}
.middle {
  top: 6px;
  left: 0;
  transform: translateX(8px);
}
.bottom {
  top: 12px;
  left: 0;
  transform: translateX(4px);
}
</style>
