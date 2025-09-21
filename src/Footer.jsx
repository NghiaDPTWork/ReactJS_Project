import "./Footer.css";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press Kit", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-about">
          <h3>YourBrand</h3>
          <p>
            Creating modern and responsive web experiences for a better future.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Github"><FaGithub /></a>
          </div>
        </div>

        {footerLinks.map((section) => (
          <div key={section.title} className="footer-section footer-links">
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} YourBrand. All Rights Reserved.
        </p>
        <p className="footer-credit">
          Designed by Tr.Nghĩa
        </p>
      </div>
    </footer>
  );
}

export default Footer;
