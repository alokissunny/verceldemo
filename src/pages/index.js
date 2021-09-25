import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Testimonials from 'sections/testimonials';
import OurTeam from 'sections/our-team';
import { jsx, Box, Container, Image } from 'theme-ui';
import { useRef, useState, useEffect } from 'react';
import SectionHeading from 'components/section-heading';


export default function IndexPage() {
  const type = ['Product Management', 'Product development', 'Startup Founders']
  const containerRef = useRef(null);
  const [containerOffset, setContainerOffset] = useState({
    left: null,
    top: null,
  });
  const styles = {
    section: {
      pt: [11],
      pb: [11, null, null, 12, null, 14],
    },
    heading: {
      p: {
        maxWidth: 500,
        m: '10px auto 0',
      },
    }}
    useEffect(() => {
      setContainerOffset({
        left: containerRef.current.offsetLeft,
        top: containerRef.current.offsetTop,
      });
    }, [containerRef]);
    function getCat(){
      return type.map(item => {
        return <div>
          <span>{item}</span> 
          <OurTeam />
        </div>
      })
    }
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Get Uplifted by Experts"
          description="Get guidance from industry experts and veterans !"
        />
        <Banner />
        <Services />
        {/* <Testimonials /> */}
        <Box as="section" id="team" sx={styles.section}>
      <Container ref={containerRef}>
        <SectionHeading
          sx={styles.heading}
          title="Meet our uplifters"
          description="Book a one-on-one session with our experts ."
        />
      </Container>
      </Box>
      {getCat()}
      {/* <div>Product management</div>
        <OurTeam /> */}
        {/* <div>Product development</div>
        <OurTeam />
        <div>Angel Investors</div>
        <OurTeam />
        <div>Big techs</div>
        <OurTeam />
        <div>Startup Founders</div>
        <OurTeam /> */}
        {/* <OtherServices /> */}
        {/* <WhyUs />
        <Blog />
        <SubscribeUs /> */}
      </Layout>
    </ThemeProvider>
  );
}
