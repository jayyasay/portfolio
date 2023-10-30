import styled from "styled-components";
import vercelLogo from "../assets/vercel-logo.png";
import craLogo from "../assets/cra-logo.png";
import reactIconsLogo from "../assets/react-icons-logo.svg";
import styledComponentslLogo from "../assets/styled-components-logo.png";
import swiperJsLogo from "../assets/swiper-logo.svg";

const Wrapper = styled.div`
background-color: #333;
padding: 30px 0 50px 0;
text-align: center;
margin-top: 30px;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;
  text-align: center;
  margin-top: 30px;

`;

const Text = styled.p`
  font-size: 10px;
`;

const Image = styled.img`
  height: 50px;
  filter: grayscale(100%);
  opacity: 0.8;
`;

const logos = [
  {
    name: "Vercel",
    url: vercelLogo,
  },
  {
    name: "CRA (ReactJS)",
    url: craLogo,
  },
  {
    name: "React Icons",
    url: reactIconsLogo,
  },
  {
    name: "Styled Components",
    url: styledComponentslLogo,
  },
  {
    name: "SwiperJS",
    url: swiperJsLogo,
  },
];

const PoweredBy = () => {
  return (
    <>
      <Wrapper>
        <p>This website is powered by:</p>
        <LogoWrapper>
          {logos.map((logo) => (
            <div key={logo.name}>
              <Image src={logo.url} alt={logo.name} />
              <Text>{logo.name}</Text>
            </div>
          ))}
        </LogoWrapper>
      </Wrapper>
    </>
  );
};

export default PoweredBy;
