import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Career Counseling", href: "#services" },
    { label: "University Admissions", href: "#services" },
    { label: "Visa Assistance", href: "#services" },
    { label: "German Language", href: "#services" },
    { label: "Accommodation Help", href: "#services" },
  ],
  resources: [
    { label: "Study in Germany Guide", href: "#" },
    { label: "Scholarship Information", href: "#" },
    { label: "University Rankings", href: "#" },
    { label: "Student Visa FAQ", href: "#" },
    { label: "Blog", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.jpeg"
                alt="Access to Deutschland"
                width={60}
                height={60}
                className="w-14 h-14 object-contain rounded-full bg-card"
              />
              <span className="text-xl font-bold">
                Access to <span className="text-accent">Deutschland</span>
              </span>
            </Link>
            <p className="text-card/70 mb-6 max-w-sm leading-relaxed">
              Your pathway to global education. We&apos;ve helped over
              100 students achieve their dream of world-class German education.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-card/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-card/60">
            &copy; {new Date().getFullYear()} Access to Deutschland. All rights reserved.
          </p>
          <p className="text-sm text-card/60">
            Designed with care for aspiring students worldwide.
          </p>
        </div>
      </div>
    </footer>
  )
}
