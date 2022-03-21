import { About } from "../atoms/About";

export const Header = ({ isOverlayActive, setOverlayActive }) => {
  const handleClickIcon = () => {
    setOverlayActive(!isOverlayActive);
  };

  return (
    <header className={`header ${isOverlayActive ? "header-in-overlay" : ""}`}>
      <span>Satoshi Ogata - Portfolio Site</span>
      <nav className="header-icons" onClick={handleClickIcon}>
        <About />
      </nav>
    </header>
  );
};
