export default function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="font-bold text-foreground mb-4">About GiveBlood</h4>
            <p className="text-muted-foreground text-sm">
              Connecting blood donors with those in need. Save lives, one donation at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition">Find Donors</a></li>
              <li><a href="#" className="hover:text-primary transition">Donate Blood</a></li>
              <li><a href="#" className="hover:text-primary transition">About Donation</a></li>
              <li><a href="#" className="hover:text-primary transition">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition">Emergency</a></li>
              <li><a href="#" className="hover:text-primary transition">Report Issue</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary transition">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2026 GiveBlood. All rights reserved. | Saving lives, one drop at a time 🩸</p>
        </div>
      </div>
    </footer>
  );
}
