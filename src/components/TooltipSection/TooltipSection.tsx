import { useRef, useState } from 'react';
import styles from './TooltipSection.module.css';
import { Banner, Button, Section, Tooltip } from '@telegram-apps/telegram-ui';

export const TooltipSection = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [shown, setShown] = useState(false);

  // Create a safe ref object that satisfies the Tooltip's requirements
  const safeRef = {
    current: buttonRef.current || document.createElement('button')
  };

  return (
    <Section header="Tooltip section">
      <Banner
        header="Tooltip on button"
        subheader="Press the button to show the tooltip"
      >
        <Button
          ref={buttonRef}
          size="s"
          className={styles.button}
          onClick={() => setShown(!shown)}
        >
          {shown ? 'Hide' : 'Show'}
        </Button>
      </Banner>
      {shown && (
        <Tooltip
          mode="dark"
          targetRef={safeRef}
        >
          Look in the mirror, you look so cute! Xx
        </Tooltip>
      )}
    </Section>
  );
};
