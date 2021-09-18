/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/icons/service1.png';
import icon2 from 'assets/images/icons/service2.png';
import icon3 from 'assets/images/icons/service3.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Get assured facetime with experts',
    description: `Uplift enables you to get assured facetime, one-on-one, with the experts where you can ask all your questions and get the right guidance. No more chasing them on social media, emails and public forums, without luck.`,
  },
  {
    id: 3,
    icon: icon2,
    title: 'Redefine networking with real conversation',
    description: `Choose the expert you want to talk to, set your agenda beforehand and extract the maximum out of your conversation. Ask questions about building a skill, interview prep for a job, or showcase your work to get expert feedback and get noticed.`,
  },
  {
    id: 4,
    icon: icon3,
    title: 'Choose the UpLifter you want to get guidance from',
    description: `You have full control to choose the experts you want to speak to. Browse through their profile, past experience and expertise and directly book a slot on their calendar. No intermediaries.`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="How can you use uplifted"
          description="Our platform helps you get right career and skill guidance from authoritative industry and domain experts"
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
