export const Overlay = ({ isOverlayActive, children }) => {
  return (
    <div className={`overlay ${isOverlayActive && "overlay-active"}`}>
      {children}
    </div>
  );
};
