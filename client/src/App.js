import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme';
import { getDirection } from './localization';
import Master from './Master';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return getDirection() === 'ltr' ? (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Master />
    </ThemeProvider>
  ) : (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Master />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
