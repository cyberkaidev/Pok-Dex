import { useSelector, shallowEqual } from 'react-redux';

function currentTheme() {
  return useSelector(
    (state: ThemeState) => state.theme,
    shallowEqual
  );
};

export default currentTheme;