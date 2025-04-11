import { css } from 'styled-system/css';

import AplAd from '@/components/experience/AplAd';
import FridgeCrew from '@/components/experience/FridgeCrew';
import NewIn from '@/components/experience/NewIn';

const Experience = () => {
  return (
    <section className={section}>
      <h3 className={h3}>업무경험</h3>
      <FridgeCrew />
      <NewIn />
      <AplAd />
    </section>
  );
};

export default Experience;

const section = css`
  display: flex;
  flex-direction: column;
  padding: 24px 0;

  > div + div {
    margin-top: 12px;
  }
`;

const h3 = css`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 12px;
`;
