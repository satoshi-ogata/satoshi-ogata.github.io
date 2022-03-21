export const SwiperPagination = ({ currentPage, items, isOverlayActive }) => (
  <>
    {!isOverlayActive && (
      <span className="swiper-pagination">{`${currentPage + 1} / ${
        items.length
      }`}</span>
    )}
  </>
);
