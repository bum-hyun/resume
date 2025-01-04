import { css } from 'styled-system/css';

import AplAd from '@/components/experience/AplAd';
import FridgeCrew from '@/components/experience/FridgeCrew';
import NewIn from '@/components/experience/NewIn';

const Experience = () => {
  return (
    <section className={section}>
      <h1 className={h1}>업무경험</h1>
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
    margin-top: 24px;
  }
`;

const h1 = css`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 24px;
`;
