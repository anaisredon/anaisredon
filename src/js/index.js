// App main
const main = async () => {
  const LazySizes = await import("lazysizes");
  const LazySizesNativeLoading = await import(
    "lazysizes/plugins/native-loading/ls.native-loading"
  );
  LazySizes.init();

  import("alpinejs");
};

main().then(() => {});

if (module.hot) {
  module.hot.accept();
}
