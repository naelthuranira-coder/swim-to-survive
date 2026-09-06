import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-deep text-sand mt-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
              <circle cx="16" cy="16" r="16" fill="#F2A73B" />
              <path
                d="M6 17c3-2.5 6-2.5 9 0s6 2.5 9 0"
                stroke="#0E3A45"
                strokeWidth="2.4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-display font-semibold text-lg">Watersafe Hub</span>
          </div>
          <p className="text-sand/70 text-sm leading-relaxed max-w-sm">
            Free, step-by-step guidance that helps parents who can swim teach
            their own children to swim safely — plus the everyday habits that
            keep families safer around water.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold mb-4">
            Explore
          </h3>
          <ul className="space-y-2.5 text-sm text-sand/80">
            <li><Link to="/guides" className="hover:text-sand">Swim guides</Link></li>
            <li><Link to="/my-swim-guide" className="hover:text-sand">My Swim Guide</Link></li>
            <li><Link to="/about-us" className="hover:text-sand">About us</Link></li>
            <li><Link to="/statistics" className="hover:text-sand">Statistics</Link></li>
            <li><Link to="/blog" className="hover:text-sand">Blog</Link></li>
            <li><Link to="/support" className="hover:text-sand">Support my guide</Link></li>
            <li><Link to="/contact" className="hover:text-sand">Contact us</Link></li>
            <li><Link to="/disclaimer" className="hover:text-sand">Disclaimer</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-sand">Privacy policy</Link></li>
            <li><Link to="/terms-of-use" className="hover:text-sand">Terms of use</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold mb-4">
            Get in touch
          </h3>
          <ul className="space-y-2.5 text-sm text-sand/80">
            <li>
              <a href="mailto:nael.thuranira@akamom.org" className="hover:text-sand break-all">
                nael.thuranira@akamom.org
              </a>
            </li>
            <li>
              <a href="tel:0117716131" className="hover:text-sand">0117 716 131</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sand/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sand/60">
          <p>&copy; {new Date().getFullYear()} Watersafe Hub. All rights reserved.</p>
          <p>Created by Nael Thuranira</p>
        </div>
      </div>
    </footer>
  );
}
