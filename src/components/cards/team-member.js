/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Image, Text, Heading, Link } from 'theme-ui';
import { FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';
import { Button, Radio, Label } from '@theme-ui/components';
import { useId, useBoolean } from '@fluentui/react-hooks';
import {
  getTheme,
  mergeStyleSets,
  FontWeights,
  ContextualMenu,
  Toggle,
  Modal,
  IDragOptions,
  IIconProps,
  Stack,
  IStackProps,
} from '@fluentui/react';
import * as React from 'react';
import { DefaultButton, IconButton, IButtonStyles } from '@fluentui/react/lib/Button';
import { Calender } from 'components/calender/calender';
import { useRef, useState, useEffect } from 'react';


const TeamMember = ({ member }) => {
  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
  const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);
  const [keepInBounds, { toggle: toggleKeepInBounds }] = useBoolean(false);
  
  // Normally the drag options would be in a constant, but here the toggle can modify keepInBounds
  const dragOptions = React.useMemo(
    () => ({
      moveMenuItemText: 'Move',
      closeMenuItemText: 'Close',
      menu: ContextualMenu,
      keepInBounds,
    }),
    [keepInBounds],
  );
  const titleId = useId('title');
   const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
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
        <Button onClick={showModal}>Meet Me</Button>
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
    <Modal
        titleAriaId={titleId}
        isOpen={isModalOpen}
        onDismiss={hideModal}
        isBlocking={false}
        containerClassName={contentStyles.container}
        dragOptions={isDraggable ? dragOptions : undefined}
      >
        <div className={contentStyles.header}>
          <span id={titleId}>Check Availablity</span>
          <IconButton
            styles={iconButtonStyles}
            iconProps={cancelIcon}
            ariaLabel="Close popup modal"
            onClick={hideModal}
          />
        </div>
        <div className={contentStyles.body}>
          <div style={{ height: '360px' }}>
                <Calender></Calender>
    </div>
        </div>
      </Modal>
    </div>
  );
};

export default TeamMember;
const cancelIcon = { iconName: 'Cancel' };

const theme = getTheme();
const contentStyles = mergeStyleSets({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'stretch',
  },
  header: [
    // eslint-disable-next-line deprecation/deprecation
    theme.fonts.xLargePlus,
    {
      flex: '1 1 auto',
      borderTop: `4px solid ${theme.palette.themePrimary}`,
      color: theme.palette.neutralPrimary,
      display: 'flex',
      alignItems: 'center',
      fontWeight: FontWeights.semibold,
      padding: '12px 12px 14px 24px',
    },
  ],
  body: {
    flex: '4 4 auto',
    padding: '0 24px 24px 24px',
    overflowY: 'hidden',
    selectors: {
      p: { margin: '14px 0' },
      'p:first-child': { marginTop: 0 },
      'p:last-child': { marginBottom: 0 },
    },
  },
});
const stackProps = {
  horizontal: true,
  tokens: { childrenGap: 40 },
  styles: { root: { marginBottom: 20 } },
};
const iconButtonStyles = {
  root: {
    color: theme.palette.neutralPrimary,
    marginLeft: 'auto',
    marginTop: '4px',
    marginRight: '2px',
  },
  rootHovered: {
    color: theme.palette.neutralDark,
  },
};
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
