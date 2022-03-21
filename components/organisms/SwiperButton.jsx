import { SwiperButtonLeft, SwiperButtonRight } from "../atoms/SwiperButton";

export const SwiperButton = ({
  items,
  currentPage,
  setCurrentPage,
  isOverlayActive,
}) => {
  const handleClick = (e) => {
    const nextValue = currentPage + +e.target.getAttribute("value");
    if (nextValue < 0 || items.length <= nextValue) return;
    setCurrentPage(nextValue);
  };
  return (
    <>
      {!isOverlayActive && (
        <div className="button-wrapper">
          <div className="button-container" onClick={handleClick}>
            <span className="swiper-button swiper-prev-button">
              <SwiperButtonLeft />
            </span>
          </div>
          <div className="button-container" onClick={handleClick}>
            <span className="swiper-button swiper-next-button">
              <SwiperButtonRight />
            </span>
          </div>
        </div>
      )}
    </>
  );
};
