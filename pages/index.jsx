import { useEffect, useState } from "react";

import { SwiperPagination } from "../components/molecules/SwiperPagination";
import { Slide } from "../components/organisms/Slide";
import { SwiperButton } from "../components/organisms/SwiperButton";
import { Layout } from "../components/templates/Layout";
import { SlideContainer } from "../components/templates/SlideContainer";
import { items } from "../static/items";

const IndexTemplate = (props) => {
  const { handler, items, OverlayContent } = props;
  const { swiper, overlay } = handler;
  return (
    <Layout overlay={overlay} OverlayContent={OverlayContent}>
      <SlideContainer {...overlay}>
        <Slide currentPage={swiper.currentPage} items={items} />
      </SlideContainer>
      <SwiperButton {...swiper} {...overlay} items={items} />
      <SwiperPagination
        currentPage={swiper.currentPage}
        {...overlay}
        items={items}
      />
    </Layout>
  );
};

const IndexPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isOverlayActive, setOverlayActive] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    items.forEach((item) => {
      const img = new Image();
      img.src = item.img;
      img.addEventListener(
        "load",
        () => {
          setImgLoaded(true);
        },
        { once: true }
      );
    });

    return () => {
      setImgLoaded(false);
    };
  }, []);

  const About = () => (
    <section className="about">
      <img className="about-img" src="/me.jpg" alt="Picture of the author" />
      <div className="about-header">SATOSHI OGATA</div>
      <div className="about-content">FRONTEND WEB DEVELOPER</div>
      <div className="about-detail">
        {
          "2018年よりweb開発者として働き始める。\nReactを使ったSPAでの画面開発を得意分野として、業務系システム、toBSaaS開発、toC向けアプリやwebviewの開発を行う。UIの使いやすさを考えるのが好き。 \n前職は英語教師。"
        }
      </div>
      <div className="about-fooder">s.ogata.72@gmail.com</div>
    </section>
  );

  const props = {
    handler: {
      swiper: { currentPage, setCurrentPage },
      overlay: { isOverlayActive, setOverlayActive },
    },
    items: items,
    OverlayContent: About,
  };
  return imgLoaded && <IndexTemplate {...props} />;
};

export default IndexPage;
