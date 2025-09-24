import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json().catch(()=>null)
  if (!body) return NextResponse.json({ success:false, message:'Invalid JSON' }, { status:400 })

  const { name, email, message } = body
  if (!name || !email || !message) {
    return NextResponse.json({ success:false, message:'Missing fields' }, { status:400 })
  }
  return NextResponse.json({ success:true })
}