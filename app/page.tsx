import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8 min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">Bienvenue sur mon mini-catalogue</h1>
      <p className="text-lg text-center max-w-md">
        Découvrez nos produits et connectez-vous pour accéder à votre espace.
      </p>
      <div className="flex gap-4">
        <Link href="/products" className="px-4 py-2 bg-blue-600 text-white rounded">
          Voir les produits
        </Link>
        <Link href="/login" className="px-4 py-2 bg-gray-600 text-white rounded">
          Se connecter
        </Link>
      </div>
    </div>
  );
}