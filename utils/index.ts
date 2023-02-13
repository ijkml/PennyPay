function slugify(str: string): string {
  str = str.trim().toLowerCase();
  str = str.replace(/[^a-z0-9]+/g, '-');
  str = str.replace(/^-+|-+$/g, '');
  return str;
}

export { slugify };
