import Image from "next/image";

export default function MissionVisionPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Mission & Vision</h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-primary">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            To cultivate transformative educational leaders and innovative entrepreneurs who drive sustainable development and positive change in Kyrgyzstan and Central Asia. We are committed to providing rigorous, relevant, and accessible education grounded in research and ethical practice.
          </p>
          <p className="text-muted-foreground">
            We aim to foster critical thinking, creativity, and a commitment to lifelong learning, preparing our graduates to navigate complex challenges and contribute meaningfully to their communities and professions.
          </p>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1920&h=1080&auto=format&fit=crop"
            alt="Team discussing mission"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-80 rounded-lg overflow-hidden order-last md:order-first">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1920&h=1080&auto=format&fit=crop"
            alt="Students looking towards the future"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-primary">Our Vision</h2>
          <p className="text-lg text-muted-foreground">
            To be the leading center for educational leadership and entrepreneurship in Central Asia, recognized for academic excellence, impactful research, and the development of ethical and innovative leaders who shape the future of education and enterprise.
          </p>
          <p className="text-muted-foreground">
            We envision a future where our graduates are catalysts for progress, creating opportunities and fostering inclusive growth within their communities and beyond.
          </p>
        </div>
      </div>
    </div>
  );
}