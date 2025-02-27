export default function Head() {
  return (
    <>
      {/* Sayfa Başlığı */}
      <title>Benim Uygulamam</title>

      {/* Android Chrome Theme Color */}
      <meta
        name="theme-color"
        content="#ffffff"
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content="#000000"
        media="(prefers-color-scheme: dark)"
      />

      {/* Apple iOS Web App Modu (Add to Home Screen) */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      {/* Diğer meta etiketler, favicons vs. */}
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
