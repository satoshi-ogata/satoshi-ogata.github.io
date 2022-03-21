import { useEffect, useRef, useState } from "react";

const SlideLeft = ({ item }) => (
  <aside className="left-side">
    <section className="main-wrapper">
      <h1 className="main-header">{item.title}</h1>
      <div className="main-description">{item.subTitle}</div>
    </section>
    <section className="main-content">
      <h1 className="main-header">環境・言語</h1>
      <div className="main-description">{item.stack}</div>
      <h1 className="main-header">自身の担当</h1>
      <div className="main-description">{item.description}</div>
    </section>
  </aside>
);

const SlideCenter = ({ item }) => (
  <main className="center">
    <div className="right-side__img">
      <img
        className="bottle-bg"
        src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Beach_1920.jpg?v=1029210661698833530"
        alt=""
      />
      <img
        className="bottle-img"
        src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/bottle_beach.png?v=11784267851598469514"
      />
    </div>
  </main>
);

const useBreakpoint = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  useEffect(() => {
    function shouldBreakpoint() {
      const width = window.innerWidth;
      setCollapsed(width < 830);
    }

    window.addEventListener("resize", shouldBreakpoint);

    shouldBreakpoint();
  }, []);

  return isCollapsed;
};
export const Slide = ({ currentPage, items }) => {
  const ref = useRef();
  const [slideHeight, setSlideHeight] = useState(ref.current?.clientHeight);

  useEffect(() => {
    function getSlideHeight() {
      setSlideHeight(ref.current.clientHeight);
    }
    window.addEventListener("resize", getSlideHeight);
    getSlideHeight();
  });

  const isCollapsed = useBreakpoint();

  const getTranslateY = (i) => {
    let value = slideHeight * i || 0;
    if (value && isCollapsed) {
      const buffer = 100;
      value += buffer;
    }
    return `translateY(-${value}px)`;
  };

  return items.map((item, i) => (
    <div
      key={item.title}
      ref={ref}
      className={`main swiper-slide ${
        i === currentPage && "swiper-slide-active"
      }`}
      style={{
        transform: getTranslateY(i),
      }}
    >
      <SlideLeft item={item} />
      <SlideCenter item={item} />
    </div>
  ));
};
