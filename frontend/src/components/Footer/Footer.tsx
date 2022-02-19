import { useEffect, useState } from "react";
import { debounce } from "../../utils/debounce";
import { FooterContainer, CreatedBy, TextSublined } from "./styles";

const Footer = () => {
  const [scrollY, setScrollY] = useState<number | string | undefined>();
  const [scrollHeight, setScrollHeight] = useState<number | undefined>();
  const [viewFooter, setViewFooter] = useState<boolean>(false);

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

  useEffect(() => {
    scroll();
    return () => {};
  }, []);

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

  return viewFooter ? (
    <FooterContainer>
      <CreatedBy>
        Criado por{" "}
        <TextSublined href="https://github.com/ramonholanda2">
          Ramon Holanda
        </TextSublined>
      </CreatedBy>
    </FooterContainer>
  ) : (
    <>
      <FooterContainer style={{ opacity: "0" }}></FooterContainer>
    </>
  );
};

export default Footer;
