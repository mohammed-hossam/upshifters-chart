import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

type RTLTypes = {
  children: React.ReactNode;
};

function RTL({ children }: RTLTypes) {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}

export default RTL;
