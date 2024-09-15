import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Efy Design Fashion</h2>
          <p>Your one-stop shop for stylish clothing and accessories. Shop the latest trends and find your perfect look for any occasion.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="mb-2">Email: support@efydesignfashion.com</p>
          <p className="mb-2">Phone: +1 234 567 890</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:underline">
              <svg className="w-6 h-6 fill-current" /* Facebook SVG */ />
            </a>
            <a href="#" aria-label="Instagram" className="hover:underline">
              <svg className="w-6 h-6 fill-current" /* Instagram SVG */ />
            </a>
            <a href="#" aria-label="Twitter" className="hover:underline">
              <svg className="w-6 h-6 fill-current" /* Twitter SVG */ />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>&copy; 2024 Efy Design Fashion. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;