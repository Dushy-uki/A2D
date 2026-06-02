"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const EMAILJS_SERVICE_ID = "service_gdfmpuh";
const EMAILJS_TEMPLATE_ID = "template_1twzqii";
const EMAILJS_PUBLIC_KEY = "tJABep_g1xXQLWDHr";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "a2d.immigtration.service@gmail.com",
    href: "mailto:a2d.immigtration.service@gmail.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "47551 Bedburg-Hau, Kleve north rhine-westphalia Germany",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Sat: 10AM - 7PM",
    href: "#",
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: "",
    intake: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      education: formData.education,
      intake: formData.intake,
      message: formData.message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        education: "",
        intake: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      const e = err as any;
      console.error("EmailJS Status:", e?.status);
      console.error("EmailJS Text:", e?.text);
      setError(`Error ${e?.status}: ${e?.text}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Start Your Free Consultation Today
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ready to begin your journey to Germany? Fill out the form below and one of our 
            expert counselors will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <Card className="lg:col-span-3 border-border">
            <CardContent className="p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground">
                    We&apos;ve received your inquiry. Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="education">Highest Education</Label>
                      <Select onValueChange={(val) => setFormData({ ...formData, education: val })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12th">12th / High School</SelectItem>
                          <SelectItem value="bachelors">Bachelor&apos;s Degree</SelectItem>
                          <SelectItem value="masters">Master&apos;s Degree</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="intake">Preferred Intake</Label>
                      <Select onValueChange={(val) => setFormData({ ...formData, intake: val })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select intake" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="summer-2026">Summer 2026 (April)</SelectItem>
                          <SelectItem value="winter-2026">Winter 2026 (October)</SelectItem>
                          <SelectItem value="summer-2027">Summer 2027 (April)</SelectItem>
                          <SelectItem value="winter-2027">Winter 2027 (October)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your goals</Label>
                    <Textarea
                      id="message"
                      placeholder="Share your academic background, preferred programs, and any questions you have..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500 text-center">{error}</p>
                  )}

                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    <Send className="mr-2 h-4 w-4" />
                    {loading ? "Sending..." : "Request Free Consultation"}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to our privacy policy. We&apos;ll never share your information.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-xl p-6 text-primary-foreground">
              <h3 className="text-lg font-semibold mb-2">
                Free Webinar Every Saturday
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Join our weekly webinar to learn about studying in Germany, 
                application process, and Q&A with our experts.
              </p>
              <Button variant="secondary" size="sm">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}