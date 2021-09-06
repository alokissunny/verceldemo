/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Image, Text, Heading, Link } from 'theme-ui';
import { FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';
import { Button, Radio, Label } from '@theme-ui/components';


const TeamMember = ({ member }) => {
  return (
    <Box style={{borderStyle: 'double'}} sx={styles.section}>
      <Flex as="figure" sx={styles.avatar}>
        {/* <Image src={member?.avatar} alt={member?.name} /> */}
        <div style={{width:380, height:420 , borderStyle: 'double'}}>
          <div style={{display:'flex'}}>
          <Image style={{width:180, height:200 , borderStyle: 'double'}}src={member?.avatar}></Image>
          <div style={{ borderStyle: 'double' , width: '50%'}}> 
            <ol>
              skill 1
            </ol>
            <ol>
              skill 2
            </ol>
            <ol>
              skill 3
            </ol>
            <ol>
              skill 4
            </ol>
          </div></div>
          <div style={{ borderStyle: 'double' , width: '100%' , height: '50%'}}>
            My acheivements bla bla
          </div>
        </div>

      </Flex>
      <Box style={{borderStyle: 'double'}} sx={styles.about}>
        <div style={{display: 'flex' , justifyContent: 'space-between'}}>
        <div>
        <Heading as="h3">{member?.name}</Heading>
        <Text as="p">{member?.designation}</Text>
        </div>
        <Button>Meet Me</Button>
        </div>
        <Box sx={styles.socialLinks}>
          {member?.socialLinks?.map((social, index) => (
            <Link href={social?.link} key={index}>
              {social?.name === 'twitter' && (
                <FaTwitter size="18px" color="#55ACEE" />
              )}
              {social?.name === 'github' && (
                <FaGithub size="18px" color="#161614" />
              )}
              {social?.name === 'dribbble' && (
                <FaDribbble
                  size="18px"
                  color="#B2215A"
                  style={{ backgroundColor: '#E74D89', borderRadius: 20 }}
                />
              )}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TeamMember;

const styles = {
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  about: {
    mt: [4],
    textAlign: ['center', null, null, 'left'],
    h3: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: [3, null, 17, null, 4],
    },
    p: {
      color: '#7589A1',
      letterSpacing: '-0.2px',
      mt: [2],
    },
  },
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['center', null, null, 'left'],
    mt: [3],
    a: {
      display: 'inline-flex',
      mr: [2],
    },
  },
};
