import { defineConfig } from 'dumi';

const root_base_config = {
  favicon: '/img/favicon.png',
  logo: '/img/logo.png',
  links: [
    {
      rel: 'stylesheet',
      href: '/css/index.css',
    },
  ],
  define: {
    IS_SUB: 'false',
    SUB_STR: '',
  },
};

const sub_base_config = {
  base: '/nlp-in-action',
  publicPath: '/nlp-in-action/',
  favicon: '/nlp-in-action/img/favicon.png',
  logo: '/nlp-in-action/img/logo.png',
  links: [
    {
      rel: 'stylesheet',
      href: '/nlp-in-action/css/index.css',
    },
  ],
  define: {
    IS_SUB: 'true',
    SUB_STR: '/nlp-in-action',
  },
};

const base_config = process.env.IS_SUB_PATH === 'true' ? sub_base_config : root_base_config;

export default defineConfig({
  ...base_config,
  title: 'NLP in action',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  navs: [null, { title: 'Github', path: 'https://github.com/emerywan/nlp-in-action' }],
  dynamicImport: {
    loading: '@/Loading',
  },
  // ssr: {
  //   devServerRender: false
  // },
  exportStatic: {},
  hash: true,
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
});
