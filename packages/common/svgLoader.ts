import viteSvgLoader from 'vite-svg-loader';

export function svgLoader() {
  return viteSvgLoader({
    svgoConfig: {
      plugins: [
        {
          name: 'addClassesToSVGElement',
          params: {
            classNames: ['base-icon'],
          },
          enabled: true,
        },
        {
          name: 'removeDimensions',
          enabled: true,
        },
      ],
    },
  });
}
