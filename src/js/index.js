import "alpinejs";
import styles from "../css/app.pcss";
import PtSansRegular from "../fonts/pt-sans-regular.woff2";

// App main
const main = async () => {
  const LazySizes = await import("lazysizes");
  const LazySizesNativeLoading = await import(
    "lazysizes/plugins/native-loading/ls.native-loading"
    );
  LazySizes.init();
};

main().then(() => {});

if (module.hot) {
  module.hot.accept();
}
