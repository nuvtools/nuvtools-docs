// docfx "modern" template options: the header links and the diagram colors of nuvtools.com.
export default {
  iconLinks: [
    { icon: 'github', href: 'https://github.com/nuvtools', title: 'GitHub' },
    { icon: 'box-seam', href: 'https://www.nuget.org/profiles/NuvTools', title: 'NuGet' },
    { icon: 'globe2', href: 'https://nuvtools.com/framework/', title: 'nuvtools.com' },
  ],
  mermaid: {
    theme: 'base',
    themeVariables: {
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      primaryColor: '#e6f4fa',
      primaryBorderColor: '#0090c6',
      primaryTextColor: '#04425b',
      secondaryColor: '#fff3ea',
      secondaryBorderColor: '#e96b20',
      tertiaryColor: '#f2f6f8',
      lineColor: '#536772',
      clusterBkg: '#f7fafb',
      clusterBorder: '#dbe4e9',
    },
  },
};
