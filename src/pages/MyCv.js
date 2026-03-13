import styled from "styled-components";
import GlobalStyle from "../components/GlobalStyle";
import SamplePdf from "../components/SamplePdf";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 90px 20px;
  background: #f7f8fc;
`;

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  padding: 24px;
  border-radius: 32px;
  background:
    radial-gradient(circle at top left, rgba(59, 130, 246, 0.08), transparent 32%),
    radial-gradient(circle at bottom right, rgba(99, 102, 241, 0.08), transparent 34%),
    linear-gradient(180deg, #ffffff 0%, #fbfcff 100%);
  border: 1px solid rgba(15, 23, 42, 0.07);
  box-shadow:
    0 10px 30px rgba(15, 23, 42, 0.05),
    0 24px 60px rgba(15, 23, 42, 0.06);

  @media screen and (min-width: 992px) {
    grid-template-columns: 0.9fr 1.1fr;
    align-items: center;
    gap: 36px;
    padding: 34px;
  }

  @media screen and (min-width: 1200px) {
    padding: 40px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  margin-bottom: 16px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #5b6475;
  background: rgba(16, 24, 40, 0.04);
  border: 1px solid rgba(16, 24, 40, 0.06);
`;

const Title = styled(motion.h2)`
  margin: 0 0 14px;
  font-size: clamp(2rem, 4.3vw, 3.7rem);
  line-height: 1.02;
  letter-spacing: -0.045em;
  font-weight: 800;
  color: #0f172a;
  max-width: 10ch;
`;

const Description = styled(motion.p)`
  margin: 0 0 22px;
  max-width: 50ch;
  font-size: 1rem;
  line-height: 1.8;
  color: #5f6b7c;

  @media screen and (min-width: 768px) {
    font-size: 1.04rem;
  }
`;

const MetaRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 26px;
`;

const MetaPill = styled.span`
  padding: 10px 14px;
  border-radius: 999px;
  font-size: 0.86rem;
  font-weight: 600;
  color: #334155;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(15, 23, 42, 0.08);
`;

const DownloadButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 50px;
  padding: 0 18px;
  border: 0;
  border-radius: 999px;
  background: #111827;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(17, 24, 39, 0.14);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: #0b1220;
  }
`;

const Right = styled.div`
  min-width: 0;
`;

const PreviewCard = styled(motion.div)`
  overflow: hidden;
  border-radius: 26px;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow:
    0 14px 34px rgba(15, 23, 42, 0.08),
    0 30px 70px rgba(15, 23, 42, 0.08);
`;

const PreviewTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  background: #ffffff;
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
`;

const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: #ed6158;

  &:nth-child(2) {
    background: #fcc02e;
  }

  &:nth-child(3) {
    background: #5fc038;
  }
`;

const PreviewLabel = styled.span`
  font-size: 0.82rem;
  color: #667085;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PreviewBody = styled.div`
  background: #f8fafc;
  padding: 10px;

  @media screen and (min-width: 768px) {
    padding: 12px;
  }
`;

const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const downloadPDF = () => {
  const link = document.createElement("a");
  link.href = `${process.env.PUBLIC_URL}/paolojayyasay_cv_2026.pdf`;
  link.download = "paolojayyasay_cv.pdf";
  link.click();
};

const Experience = () => {
  return (
    <Section id="mycv">
      <GlobalStyle />
      <Container>
        <Card>
          <Left>
            <Eyebrow>Curriculum Vitae</Eyebrow>

            <Title
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              View my CV at a glance.
            </Title>

            <Description
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              A concise snapshot of my experience across frontend development,
              ecommerce builds, UI implementation, and real-world client work.
              Preview it here or download the full PDF version.
            </Description>

            <MetaRow
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <MetaPill>15+ Years Experience</MetaPill>
              <MetaPill>Frontend / UI</MetaPill>
              <MetaPill>React / WordPress / Shopify</MetaPill>
            </MetaRow>

            <DownloadButton
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              onClick={downloadPDF}
            >
              Download PDF <FiDownload />
            </DownloadButton>
          </Left>

          <Right>
            <PreviewCard
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <PreviewTop>
                <Dots>
                  <Dot />
                  <Dot />
                  <Dot />
                </Dots>
                <PreviewLabel>paolojayyasay_cv.pdf</PreviewLabel>
              </PreviewTop>

              <PreviewBody>
                <SamplePdf />
              </PreviewBody>
            </PreviewCard>
          </Right>
        </Card>
      </Container>
    </Section>
  );
};

export default Experience;