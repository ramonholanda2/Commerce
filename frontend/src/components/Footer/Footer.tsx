import { useEffect, useState } from "react";
import { FooterContainer, CreatedBy, TextSublined } from "./styles";
import { debounce } from "../../utils/debounce";

const Footer = () => {
  const [scrollY, setScrollY] = useState<number | string | undefined>();
  const [scrollHeight, setScrollHeight] = useState<number | undefined>();
  const [viewFooter, setViewFooter] = useState<boolean>(false);

  useEffect(() => {
    if (scrollY !== undefined && scrollHeight !== undefined) {
      if (scrollY >= document.body.scrollHeight) {
        setViewFooter(true);
      } else {
        setViewFooter(false);
      }
    }
    return () => {};
  }, [scrollHeight, scrollY]);

  useEffect(() => {
    scroll();
    return () => {};
  }, []);

  function scroll() {
    setScrollY((window.pageYOffset + window.innerHeight).toFixed(2));
    setScrollHeight(document.body.scrollHeight);
  }

  window.addEventListener(
    "scroll",
    debounce(() => {
      scroll();
    }, 100)
  );

  return viewFooter ? (
    <FooterContainer>
      <CreatedBy>
        Criado por <TextSublined>Github</TextSublined>
      </CreatedBy>
    </FooterContainer>
  ) : (
    <>
      <FooterContainer style={{ opacity: "0" }}></FooterContainer>
    </>
  );
};

export default Footer;
