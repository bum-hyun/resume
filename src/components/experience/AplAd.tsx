import { css } from 'styled-system/css';

import CompanyInfo from '@/components/experience/CompanyInfo';

const AplAd = () => {
  return (
    <div className={container}>
      <CompanyInfo companyName={'에이플에이디'} companyRole={'Frontend Developer'} period={'2019.08 - 2020.06'} url={'https://www.youtube.com/watch?v=0BhrT0JuubE'} />
      <div className={content}>
        <div className={projectWrap}>
          <h2 className={project}>에디프레소 2.0</h2>

          <div className={wrap}>
            <div className={experience}>뉴스 발행 및 관리 솔루션 에디프레소의 두번째 버전을 개발했습니다.</div>
          </div>

          <div className={wrap}>
            <h4 className={label}>주요 업무</h4>
            <span className={experience}>뉴스 작성 에디터 기능 개발</span>
            <span className={experience}>뉴스 관리 기능 개발</span>
          </div>

          <div className={wrap}>
            <h4 className={label}>사용 기술</h4>
            <span className={experience}>Vue, Vuex</span>
          </div>
        </div>

        <div className={projectWrap}>
          <h2 className={project}>공감신문, 내외경제, 리서치페이퍼 페이지 개발</h2>

          <div className={wrap}>
            <div className={experience}>PC, Moible 환경에 따른 뉴스페이지들을 개발했습니다.</div>
          </div>

          <div className={wrap}>
            <h4 className={label}>주요 업무</h4>
            <span className={experience}>Blade Template을 사용하여 각 뉴스페이지 개발</span>
          </div>

          <div className={wrap}>
            <h4 className={label}>사용 기술</h4>
            <span className={experience}>Javascript, Jquery</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AplAd;

const container = css`
  display: flex;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;

const content = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const projectWrap = css``;

const project = css`
  margin-bottom: 8px;
`;

const wrap = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

const label = css`
  margin-bottom: 8px;
`;

const remembrance = css`
  margin-bottom: 12px;
`;

const experience = css``;
