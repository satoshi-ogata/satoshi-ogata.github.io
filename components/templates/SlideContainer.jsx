export const SlideContainer = ({ isOverlayActive, children }) => {
  return (
    <div className={`mySwiper ${isOverlayActive && "mySwiper-inactive"}`}>
      <section className="main-wrapper swiper-wrapper">{children}</section>
    </div>
  );
};
