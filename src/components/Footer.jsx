import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-content">
        <div className="footer-brand">
          <span role="img" aria-label="plant">🌱</span> Paradise Nursery
          <span style={{ fontWeight: 400, fontSize: "1rem", marginLeft: 8 }}>
            by Asmit Mahapatra
          </span>
        </div>
        <div className="footer-links">
          <a href="mailto:asmitmahapatra6@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a>
          <a href="https://www.instagram.com/asmit_mahapatra_/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
      <div className="footer-copy">© {new Date().getFullYear()} Paradise Nursery. All rights reserved.</div>
    </footer>
  );
}
