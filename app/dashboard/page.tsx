import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const userCookie = cookieStore.get('user')

  if (!userCookie) {
    redirect('/login')
  }

  const user = JSON.parse(userCookie.value)

  return (
    <div>
      <h1>Dashboard</h1>
      <p className="mt-4">
        Bienvenue <strong>{user.name}</strong> ! ✅
      </p>
      <p className="text-sm text-gray-600">{user.email}</p>
    </div>
  )
}