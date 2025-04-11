import { css } from 'styled-system/css';

const Etc = () => {
  return (
    <section className={section}>
      <h3 className={h1}>기타</h3>

      <div className={wrap}>
        <h4 className={h3}>
          <strong>국민대학교 법학과</strong>
        </h4>
        <p className={p}>
          법학과 졸업 후 F&F 법무팀에서 지식재산권 업무 담당 인턴을 했었습니다. 법무팀 업무를 경험하고 적성에 맞지 않다고 생각했고, 전산병 시절과 티스토리 블로그를 운영할 때 코드를 작성하는 일이
          흥미로웠던 기억이 있어 국비교육을 수료하고 개발자로의 커리어를 시작했습니다.
        </p>
      </div>

      <div className={wrap}>
        <h4 className={h3}>
          <strong>업무 태도</strong>
        </h4>
        <p className={p}>프론트엔드 개발자로서 디자이너, 백엔드 개발자, 기획자와 적극적으로 대화하려고 노력합니다.</p>
        <p className={p}>시스템이 없는 경우 시스템을 만들어 효율적인 업무를 할 수 있도록 적극적으로 의견을 제시합니다.</p>
        <p className={p}>언제 어디서든 제가 개발한 서비스에서 대해서 유지보수 할 수 있도록 노력합니다.</p>
      </div>

      <div className={wrap}>
        <h4 className={h3}>
          <strong>개발에 관하여</strong>
        </h4>
        <p className={p}>읽기 쉬운 코드 작성을 위해 노력합니다.</p>
        <p className={p}>적절한 개발 기간 산정에 자신이 있고, 빠른 개발에 자신이 있습니다.</p>
        <p className={p}>자기주도적인 업무태도가 중요한 스타트업 환경에 익숙합니다.</p>
        <p className={p}>Emotion을 사용하여 컴포넌트별 스타일 적용을 선호합니다.</p>
        <p className={p}>React Native와 Flutter를 사용하여 하이브리드앱을 개발해본 경험이 있습니다.</p>
      </div>
    </section>
  );
};

export default Etc;

const section = css`
  display: flex;
  flex-direction: column;
  padding: 24px 0 60px;

  > div + div {
    margin-top: 24px;
  }
`;

const h1 = css`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const wrap = css``;

const h3 = css`
  font-size: 24px;
  line-height: 36px;
  margin-top: 6px;
  margin-bottom: 16px;
  color: #212121;
`;

const p = css`
  font-size: 14px;
  color: #121212;
`;
