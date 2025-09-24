'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('user@example.com')
  const [password, setPassword] = useState('password')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    if (res.ok) router.push('/dashboard')
    else {
      const body = await res.json()
      setError(body?.message || 'Login failed')
    }
  }

  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-bold">Login</h1>
      <form onSubmit={submit} className="mt-4 flex flex-col gap-2">
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
        <button className="mt-2">Sign in</button>
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  )
} 