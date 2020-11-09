import styles from "../css/app.pcss";
import PtSansRegular from "../fonts/pt-sans-regular.woff2";
import AvianoBold from "../fonts/aviano-bold.woff2";
import FuturaStdBold from "../fonts/futura-std-bold.woff2";
import FuturaStdBook from "../fonts/futura-std-book.woff2";

// App main
const main = async () => {
  const LazySizes = await import("lazysizes");
  const LazySizesNativeLoading = await import(
    "lazysizes/plugins/native-loading/ls.native-loading"
  );
  LazySizes.init();

  await import("alpinejs");
};

main().then(() => {});

if (module.hot) {
  module.hot.accept();
}
