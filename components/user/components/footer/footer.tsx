export default function Footer() {
  return (
    <footer className="bg-[#212121] text-white py-12 w-full">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <img className="w-fit h-8" src="/logo/megaworld-white.png" alt="Megaworld Logo" />
          <p className="text-sm text-gray-400 mt-2">
            The Philippines' most awarded township developer
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-400">
            <li>Uptown Bonifacio, McKinley Hill</li>
            <li>McKinley West, Northwin Global City</li>
            <li>Email: <a href="mailto:laramagbalana.megaworld@gmail.com" className="text-[#B8986E] hover:underline">laramagbalana.megaworld@gmail.com</a></li>
            <li>Phone: <a href="tel:+639175935272" className="text-[#B8986E] hover:underline">+63 917 593 5272</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Site Navigation</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-400">
            {["Home", "About Us", "Projects", "Testimonials", "Blog", "Contact Us", "Visit our Showroom"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#B8986E] transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <p className="text-sm text-gray-400 mt-2">Subscribe to get updates.</p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Email address..."
              className="w-full px-3 py-2 text-gray-900 rounded-l-md focus:outline-none"
            />
            <button className="bg-[#B8986E] text-white px-4 py-2 rounded-r-md hover:bg-[#a0805e] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Reland. All rights reserved.
      </div>
    </footer>
  );
}
