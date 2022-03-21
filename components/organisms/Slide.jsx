import { useEffect, useRef } from "react";

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

export const Slide = ({ currentPage, items }) => {
  const item = items[currentPage];
  const ref = useRef();

  useEffect(() => {
    ref.current?.classList.add("swiper-slide-active");
  }, [currentPage]);

  return (
    <div key={item.id} ref={ref} className="main swiper-slide">
      <SlideLeft item={item} />
      <SlideCenter item={item} />
    </div>
  );
};
