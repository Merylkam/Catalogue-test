/*import { verifyToken } from '../../lib/auth'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function DashboardPage() {
  const token = cookies().get('token')?.value
  const user = token ? verifyToken(token) : null
  if (!user) return redirect('/login')

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-4">Welcome, <strong>{user.name}</strong></p>
      <p className="text-sm text-gray-600">{user.email}</p>
    </div>
  )
}*/
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const cookieStore = await cookies()  // <-- on attend
  const loggedIn = cookieStore.get('loggedIn')

  if (!loggedIn) {
    redirect('/login')
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bienvenue ! Vous êtes connecté ✅</p>
    </div>
  )
}