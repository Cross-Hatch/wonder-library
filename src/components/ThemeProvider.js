export const theme = {
  dark000: '#000000',
  dark100: '#111111',
  dark200: '#151515',
  dark300: '#272727',
  light: '#fefefe',
  red: '#cc0000',
  gradient: `linear-gradient(
          0deg,
          #11111140 41.32%,
          #a0a0a040 100%
        )`,
  shadow: (d, blur = '20px', color = '#272727', opacity = 'ee') =>
    `drop-shadow(0px 12px ${blur} ${color}${opacity}) drop-shadow(0px 12px 9px #151515bb)`,
  superShadow: `0px 101.333px 127.68px rgba(0, 0, 0, 0.15),
      0px 42.3346px 53.3417px rgba(0, 0, 0, 0.107828),
      0px 22.6341px 28.519px rgba(0, 0, 0, 0.0894161),
      0px 12.6885px 15.9875px rgba(0, 0, 0, 0.075),
      0px 6.73877px 8.49085px rgba(0, 0, 0, 0.0605839),
      0px 2.80415px 3.53323px rgba(0, 0, 0, 0.0421718)`,
};
