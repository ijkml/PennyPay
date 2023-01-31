import type { RouteLocationRaw } from 'vue-router';

export interface AppLink {
  text: string;
  to: RouteLocationRaw;
  drop?: false | undefined;
}

export interface AppLinkDrop {
  text: string;
  id: string;
  drop: AppLink[];
}
