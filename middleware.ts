import { NextRequest, NextResponse } from 'next/server'

const COOKIE_NAME = 'sessionId'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const sessionId = request.cookies.get(COOKIE_NAME)?.value ?? crypto.randomUUID()

  if (!request.cookies.has(COOKIE_NAME)) {
    response.cookies.set(COOKIE_NAME, sessionId)
  }

  return response
}
