import Image from "next/image"
import Link from "next/link"

export default function PopularCategories() {
  const categories = [
    {
      name: "Bumper Cover",
      image: "/car-bumper.png",
      href: "/categories/body/bumper-cover",
    },
    {
      name: "Headlights",
      image: "/car-headlights.png",
      href: "/categories/headlights",
    },
    {
      name: "Mirrors",
      image: "/car-mirrors.png",
      href: "/categories/body/mirrors",
    },
    {
      name: "Fenders",
      image: "/car-fenders.png",
      href: "/categories/body/fenders",
    },
    {
      name: "Tail Lights",
      image: "/car-tail-lights.png",
      href: "/categories/headlights/tail-lights",
    },
    {
      name: "Grille Assemblies",
      image: "/car-grille.png",
      href: "/categories/exterior/grille-assemblies",
    },
    {
      name: "Shock Absorber",
      image: "/placeholder.svg?key=4oyqc",
      href: "/categories/brakes/shock-absorber",
    },
    {
      name: "Brake Disc",
      image: "/placeholder.svg?key=52ltr",
      href: "/categories/brakes/brake-disc",
    },
  ]

  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Popular Parts</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <Link key={index} href={category.href} className="flex flex-col items-center text-center group">
              <div className="border rounded-lg p-2 mb-2 w-full aspect-square flex items-center justify-center overflow-hidden group-hover:border-[#007BFF] transition-colors">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={120}
                  height={120}
                  className="object-contain max-h-full"
                />
              </div>
              <span className="text-sm font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
