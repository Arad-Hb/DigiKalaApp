import "./globals.css";
import localFont from 'next/font/local'
import StoreProvider from "@/components/features/StoreProvider";



export const metadata = {
  title: "Digi Kala",
  description: "Created By AradHb",
};
const iranSansFont=localFont(
  {src:'../../public/fonts/iransansx/IRANSansXRegular.ttf'},
  {src:'../../public/fonts/iransansx/IRANSansXBlack.ttf'},
  {src:'../../public/fonts/iransansx/IRANSansXBold.ttf'},
  {src:'../../public/fonts/iransansx/IRANSansXDemiBold.ttf'},
  {src:'../../public/fonts/iransansx/IRANSansXLight.ttf'},
  {src:'../../public/fonts/iransansx/IRANSansXMedium.ttf'},
  {src:'../../public/fonts/iransansx/IRANSansXThin.ttf'},
  {src:'../../public/fonts/iransansx/IRANSansXUltraLight.ttf'})


export default function RootLayout({children}) {

  return (
    <html lang="fa">
      <head>
        <meta name="google-site-verification" content="35nrG3scit2tyykXnUvj09NlUGj__hiNH5LyWlrGnIM" />
      </head>
      <body  className={iranSansFont.className }>
      <StoreProvider>
          <>{children}</>
      </StoreProvider> 
      </body>
    </html>
  );
}
