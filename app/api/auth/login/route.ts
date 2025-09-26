
    import { NextResponse } from 'next/server'

    export async function POST(req: Request) {
      const { email, password } = await req.json().catch(() => ({}))
    
      const MOCK_USER = { email: 'user@example.com', password: 'password', name: 'Meryl' }
    
      if (email === MOCK_USER.email && password === MOCK_USER.password) {
        const res = NextResponse.json({ success: true })
    
        
        res.cookies.set(
          'user',
          JSON.stringify({ name: MOCK_USER.name, email: MOCK_USER.email }),
          {
            httpOnly: false, 
            path: '/',
            maxAge: 3600,
          }
        )
    
        return res
      }
    
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 })
    }