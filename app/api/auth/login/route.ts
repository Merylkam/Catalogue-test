
/*import { NextResponse } from 'next/server'
import { signToken } from '../../../../lib/auth'

export async function POST(req: Request) {
  const { email, password } = await req.json().catch(() => ({}))
  const MOCK_USER = { email: 'user@example.com', password: 'password', name: 'Demo User' }

  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    const token = signToken({ name: MOCK_USER.name, email: MOCK_USER.email })
    const res = NextResponse.json({ success: true })
    res.cookies.set('token', token, { httpOnly: true, path: '/', maxAge: 60 * 60 })
    return res
  }

  return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 })
}
*/import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    const { email, password } = await req.json().catch(() => ({}))
    if (email === 'user@example.com' && password === 'password') {
      const res = NextResponse.json({ success: true })
      res.cookies.set('loggedIn', 'true', { httpOnly: true, path: '/', maxAge: 3600 })
      return res
    }
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 })
  }