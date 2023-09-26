import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from '@/context/loginContext/AuthProvider'
import MoviesProvider from '@/context/moviesContext/MoviesProvider'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Netflix',
  description: 'A movie app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black `} >
        <AuthProvider>
          <MoviesProvider>     
            {children}
          </MoviesProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
