import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

const brandColors = {
  brand: {
    pri: '#045256',
    sec: '#9ab8ba',
    lit: '#ddf7f8',
    blk: '#0b1516',
    wht: '#f6fcfc',
  },

  cta: {
    btn: '#045258',
    lit: '#068288',
  },
};

export default defineConfig({
  theme: {
    colors: {
      ...brandColors,
    },
    fontSize: {
      h1: '3.0rem',
      h2: '2.5rem',
      h3: '1.9rem',
      h4: '1.563rem',
      h5: '1.25rem',
    },
  },
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
