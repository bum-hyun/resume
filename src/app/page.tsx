import { css } from 'styled-system/css';

import Etc from '@/components/Etc';
import Experience from '@/components/Experience';
import Introduce from '@/components/Introduce';

export default function Home() {
  return (
    <div className={container}>
      <Introduce />
      <Experience />
      <Etc />
    </div>
  );
}

const container = css`
  max-width: 960px;
  width: 100%;
  padding: 0 60px;
  margin: 0 auto;

  > section {
    border-bottom: 1px solid #ddd;
  }
`;
