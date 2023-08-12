import Cookies from 'js-cookie'
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  // const token = localStorage.getItem("token")
  const url = request.url;
  const verify = request.cookies.get('isLoggedIn');
  if(!verify && url.includes("/products")){
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }
  
}
