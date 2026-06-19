import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Lightbulb, Target, Users, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Student-First',
    desc: 'Every decision starts with one question: does this make campus life better for students?',
  },
  {
    icon: Users,
    title: 'Community Driven',
    desc: 'Built by students, for students. We listen, adapt, and grow with the campus community.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solvers',
    desc: "We don't just build features — we solve real problems students face every single day.",
  },
  {
    icon: TrendingUp,
    title: 'Always Growing',
    desc: 'From 1 campus to 8 and counting. Every milestone is a step toward the bigger vision.',
  },
];

const milestones = [
  { num: '8', label: 'Live Campuses' },
  { num: '2,400+', label: 'Active Students' },
  { num: '₦28M+', label: 'Escrow Processed' },
  { num: '0', label: 'Scams Reported' },
];

export default function About() {
  return (
    <div className="min-h-[100dvh] bg-blue-bg">
      <Navbar />

      {/* Hero */}
      <div className="relative bg-text-primary pt-20">
        <div className="px-4 sm:px-6 lg:px-10 py-16 lg:py-24 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs text-white/60 mb-4">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">About</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
            I built this
            <br />
            <span className="text-blue-400 italic">because I lived it.</span>
          </h1>
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            A bed left behind, skills nobody on campus knew I had, and a problem
            every student around me was quietly living with too. KampusVillage
            started as my personal answer. Then I realised it was everyone's.
          </p>
        </div>
      </div>

      <main className="px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
        {/* Story Section */}
        <div className="max-w-5xl mx-auto mb-16 lg:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-text-primary shadow-sticky">
                <img
                  src="/about_founder.jpg"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-accent border-2 border-text-primary rounded-xl p-4 shadow-sticky">
                <p className="text-xs font-semibold text-text-primary">
                  Built for students,
                  <br />
                  by students.
                </p>
              </div>
            </div>

            {/* Right - Story */}
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-cream border-2 border-text-primary rounded-full text-xs font-semibold mb-6">
                <Lightbulb className="w-4 h-4 text-yellow-accent" /> The Story
              </span>

              <h2 className="font-display text-3xl sm:text-4xl text-text-primary mb-6">
                It started with{' '}
                <span className="text-green-accent italic">a bed.</span>
              </h2>

              <div className="space-y-4 text-text-secondary text-sm leading-relaxed">
                <p>
                  When I moved from the university hostel into off-campus
                  accommodation, I bought a new bed. Simple enough. But when it
                  was time to move again, there was a problem. What do you do
                  with the old one? Post it on your status? Ask around in a
                  hundred different DMs? Most students already know the answer:
                  you leave it behind.
                </p>
                <p>
                  That bed sat in the corner of an empty room, next to a pair of
                  shoes that no longer fit the commute, a fan someone said
                  they'd come pick up, a pile of things that had real value to
                  any incoming student but ended up abandoned anyway. Not
                  because nobody needed them. Because there was no easy, trusted
                  way to pass them on.
                </p>
                <p>
                  I started asking around. Every student had a version of this
                  story. A pot, a mattress, a semester-old textbook, a
                  mini-fridge. Things gathering dust not out of lack of demand
                  but out of lack of infrastructure. So I stopped complaining
                  and started building.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="max-w-4xl mx-auto mb-16 lg:mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="bg-cream border-2 border-text-primary shadow-card rounded-xl p-6 text-center"
              >
                <p className="text-3xl lg:text-4xl font-display text-text-primary mb-1">
                  {m.num}
                </p>
                <p className="text-xs text-text-secondary">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="max-w-5xl mx-auto mb-16 lg:mb-24">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl text-text-primary mb-3">
              What we stand for
            </h2>
            <p className="text-text-secondary text-sm max-w-lg mx-auto">
              The principles that guide every decision we make at
              KampusVillage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-cream border-2 border-text-primary shadow-card rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-lavender border-2 border-text-primary rounded-full flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-text-primary" />
                </div>
                <h3 className="font-bold text-lg text-text-primary mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-text-secondary">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/marketplace"
            className="btn-primary inline-flex items-center gap-2"
          >
            Join the Community
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
