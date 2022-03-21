import { Header } from "../molecules/Header";
import { Overlay } from "./Overlay";

export const Layout = ({ overlay, OverlayContent, children }) => (
  <div className="container">
    <Header {...overlay} />
    {children}
    <Overlay {...overlay}>
      {overlay.isOverlayActive && <OverlayContent />}
    </Overlay>
  </div>
);
