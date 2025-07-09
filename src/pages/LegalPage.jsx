import React from "react";

const LegalPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-700 mt-18">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-[#34B34C] text-center mb-10">
        Legal Information
      </h1>

      {/* Terms & Conditions */}
      <section className="mb-14">
        <h2 className="text-3xl font-semibold text-[#34B34C] mb-4">
          Terms & Conditions
        </h2>
        <p className="mb-4">
          Welcome to MK Polypet India Pvt. Ltd. These terms and conditions
          outline the rules and regulations for the use of our website and
          services.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h3>
        <p className="mb-4">
          By accessing or using our website, you agree to comply with and be
          bound by these terms. If you do not agree, please refrain from using
          our site.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">2. License to Use</h3>
        <p className="mb-4">
          Permission is granted to temporarily download one copy of the
          materials for personal, non-commercial use only.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">3. Limitations</h3>
        <p className="mb-4">
          MK Polypet will not be held liable for any damages arising out of the
          use or inability to use the materials on the site.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">4. Updates</h3>
        <p className="mb-4">
          We reserve the right to revise these terms at any time without prior
          notice. Please check this page periodically.
        </p>
      </section>

      {/* Privacy Policy */}
      <section className="mb-14">
        <h2 className="text-3xl font-semibold text-[#34B34C] mb-4">
          Privacy Policy
        </h2>
        <p className="mb-4">
          At MK Polypet India Pvt. Ltd., your privacy is important to us. This
          policy explains how we collect, use, and protect your personal data.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h3>
        <p className="mb-4">
          We collect information you provide (e.g., contact forms) and data via
          cookies for analytics and security purposes.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">2. Use of Information</h3>
        <p className="mb-4">
          We use your data to improve services, communicate updates, and protect
          against fraud.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">3. Sharing of Data</h3>
        <p className="mb-4">
          We do not share your data with third parties unless legally required
          or with your consent.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h3>
        <p className="mb-4">
          We implement security measures to protect your personal data from
          unauthorized access or disclosure.
        </p>
      </section>

      {/* Contact Info */}
      <section>
        <h2 className="text-3xl font-semibold text-[#34B34C] mb-4">
          Contact Information
        </h2>
        <p className="mb-2">
          <span className="font-semibold"> Address:</span> Near Bidar, Karnataka, India
        </p>
        <p className="mb-2">
          <span className="font-semibold"> Email:</span>{" "}
          <a href="mailto:mkpolypet@gmail.com" className="text-blue-600 underline">
            mkpolypet@gmail.com
          </a>
        </p>
        <p className="mb-2">
          <span className="font-semibold"> Phone:</span>{" "}
          <a href="tel:+919611000960" className="text-blue-600 underline">
            +91 9611000960
          </a>
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-10 text-center">
        Last updated: July 9, 2025
      </p>
    </div>
  );
};

export default LegalPage;
