const colorMap = {
  s: '#E4BAD4',
  p: '#94D0CC',
  d: '#F4C7AB',
  f: '#FDFFBC',
};

const SwitchCase = (props) => {
  switch (props) {
    case 'd':
      return colorMap.d;
    case 'f':
      return colorMap.f;
    case 'p':
      return colorMap.p;
    case 's':
      return colorMap.s;
    default:
      return;
  }
};
export default SwitchCase;
