import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Header from "@/components/header"

export default function AboutPage() {
  // Team members data
  const teamMembers = [
    {
      name: "Juan Dela Cruz",
      position: "Founder & CEO",
      image: "/filipino-businessman.png",
      bio: "Juan founded PyeSakto.ph in 2020 after experiencing frustration with finding quality auto parts for his Toyota Fortuner. With 15 years in the automotive industry, he built PyeSakto to solve a common problem for Filipino car owners.",
    },
    {
      name: "Maria Santos",
      position: "Chief Operating Officer",
      image: "/filipino-business-woman.png",
      bio: "Maria brings over 10 years of e-commerce and supply chain experience to PyeSakto. She previously managed operations for one of the Philippines' largest online retailers before joining our mission.",
    },
    {
      name: "Carlos Reyes",
      position: "Head of Partnerships",
      image: "/filipino-business-professional.png",
      bio: "Carlos manages our relationships with suppliers and brands across the Philippines. His background in the auto parts distribution industry has been instrumental in building our extensive catalog.",
    },
    {
      name: "Sofia Mendoza",
      position: "Customer Experience Director",
      image: "/filipino-professional-woman.png",
      bio: "Sofia ensures that every customer interaction with PyeSakto exceeds expectations. Her team handles customer support, returns, and continuously improves the shopping experience.",
    },
  ]

  // Timeline data
  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description:
        "PyeSakto.ph was founded with a mission to make quality auto parts accessible to all Filipino vehicle owners.",
    },
    {
      year: "2021",
      title: "Rapid Growth",
      description:
        "Expanded our catalog to over 50,000 parts and established partnerships with major brands and suppliers.",
    },
    {
      year: "2022",
      title: "Nationwide Expansion",
      description: "Launched next-day delivery to major cities and opened our first physical store in Metro Manila.",
    },
    {
      year: "2023",
      title: "Technology Innovation",
      description:
        "Introduced our vehicle compatibility checker and mobile app to make finding the right parts easier than ever.",
    },
    {
      year: "2024",
      title: "Supplier Platform",
      description:
        "Launched our supplier platform, enabling local auto parts businesses to reach customers nationwide.",
    },
    {
      year: "2025",
      title: "Looking Forward",
      description:
        "Continuing to innovate and expand with a focus on sustainability and supporting local manufacturers.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto py-3 px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#007BFF]">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-400" />
            <span className="text-gray-900 font-medium">Our Story</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#2E2E2E] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">Our Story</h1>
              <p className="text-xl text-gray-300 mb-6">
                Building the Philippines' most trusted destination for automotive parts and accessories.
              </p>
              <p className="text-gray-400">
                PyeSakto.ph was born from a simple idea: make it easy for Filipino vehicle owners to find the exact
                parts they need, at fair prices, with confidence in quality and compatibility.
              </p>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
              <Image src="/modified-philippine-jeepney.png" alt="PyeSakto Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border">
              <h2 className="text-2xl font-bold mb-4 text-[#2E2E2E]">Our Mission</h2>
              <p className="text-gray-700">
                To provide Filipino vehicle owners with access to high-quality, affordable auto parts through a seamless
                online shopping experience, backed by expert support and guaranteed compatibility.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border">
              <h2 className="text-2xl font-bold mb-4 text-[#2E2E2E]">Our Vision</h2>
              <p className="text-gray-700">
                To be the Philippines' most trusted automotive parts marketplace, empowering vehicle owners to maintain
                and enhance their vehicles with confidence while supporting local suppliers and manufacturers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Journey Timeline */}
      <div className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#C8102E]"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} md:flex-row`}>
                    <div className="md:w-1/2 p-4 md:pr-8 md:text-right">
                      <div className={index % 2 === 0 ? "md:pr-12" : "md:pl-12"}>
                        <span className="text-[#C8102E] font-bold text-xl">{item.year}</span>
                        <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                        <p className="text-gray-600 mt-2">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#C8102E] z-10"></div>
                    <div className="md:w-1/2 p-4 md:pl-8 hidden md:block"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg border overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-[#C8102E] text-sm mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border">
              <div className="w-12 h-12 bg-[#C8102E]/10 text-[#C8102E] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our products. Every part we sell meets or exceeds OEM
                specifications and undergoes rigorous quality checks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <div className="w-12 h-12 bg-[#007BFF]/10 text-[#007BFF] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Customer Trust</h3>
              <p className="text-gray-600">
                Building and maintaining customer trust is at the core of everything we do. From accurate product
                descriptions to reliable shipping and honest customer service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <div className="w-12 h-12 bg-[#2E2E2E]/10 text-[#2E2E2E] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Filipino Service</h3>
              <p className="text-gray-600">
                We provide the warm, personalized service that Filipinos are known for. Our customer support team
                understands local needs and goes above and beyond to help.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Impact */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
              <Image src="/filipino-automotive-community.png" alt="Community Impact" fill className="object-cover" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-gray-700 mb-4">
                Beyond providing auto parts, PyeSakto.ph is committed to making a positive impact on the Philippine
                automotive community and economy.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C8102E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Supporting local manufacturers and suppliers through our marketplace platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C8102E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Creating jobs in logistics, customer service, and technology across the Philippines</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C8102E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Hosting free automotive maintenance workshops in communities across the country</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C8102E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Partnering with technical schools to provide training and internship opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Join Our Team CTA */}
      <div className="bg-[#2E2E2E] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about automotive parts and e-commerce.
            Check out our current openings and become part of our growing team.
          </p>
          <Link href="/careers">
            <Button size="lg" className="bg-[#C8102E] hover:bg-[#A50D26] text-white">
              View Career Opportunities
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
