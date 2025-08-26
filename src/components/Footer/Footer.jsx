const IEEEFooter = () => {
  const navLinks = [
    'IEEE Home',
    'Contact & Support',
    'Accessibility',
    'Nondiscrimination Policy',
    'IEEE Ethics Reporting',
    'Terms and Conditions',
    'IEEE Privacy Policy',
    'More IEEE Sites',
    'Feedback'
  ];

  return (
    <footer className="bg-slate-800 text-gray-300 py-8">
      {/* Navigation Links */}
      <div className="border-b border-gray-600 pb-6 mb-8">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            {navLinks.map((link, index) => (
              <span key={index}>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
                {index < navLinks.length - 1 && (
                  <span className="ml-6 text-gray-500">|</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Venue Information */}
          <div>
            <h3 className="text-white text-xl font-medium mb-4 italic">Venue</h3>
            <div className="space-y-1 text-gray-300">
              <p>Vallurupalli Nageswara Rao Vignana Jyothi</p>
              <p>Institute of Engineering and Technology,</p>
              <p>Pragathi Nagar, Nizampet (S.O)</p>
              <p>Hyderabad, Telangana, 500 090</p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-xl font-medium mb-4 italic">Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Technical Program Chair */}
              <div className="space-y-2">
                <div>
                  <p className="text-white font-medium">P. Kishore</p>
                  <p className="text-gray-400 text-sm">Technical Program Chair</p>
                  <p className="text-gray-300 text-sm">Mobile: 9866940403</p>
                </div>
              </div>

              {/* General Chair */}
              <div className="space-y-2">
                <div>
                  <p className="text-white font-medium">Y. Padma Sai</p>
                  <p className="text-gray-400 text-sm">General Chair</p>
                  <p className="text-gray-300 text-sm">Mobile: 9000037660</p>
                </div>
              </div>
            </div>
            
            {/* Email Contact */}
            <div className="mt-6 pt-4 border-t border-gray-600">
              <p className="text-gray-300">
                Email us: 
                <a 
                  href="mailto:contactus@icmacc.org" 
                  className="text-blue-400 hover:text-blue-300 ml-1 transition-colors duration-200"
                >
                  contactus@icmacc.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default IEEEFooter;