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
            <div className={experience}>뉴스 발행 및 콘텐츠 관리 플랫폼 `에디프레소 2.0` 개발</div>
          </div>

          <div className={wrap}>
            <h4 className={label}>주요 업무</h4>
            <span className={experience}>뉴스 작성 에디터 및 기사 관리 기능 구현</span>
            <span className={experience}>Vuex를 활용한 상태 관리 구조 도입 및 컴포넌트 단위 재사용성 향상</span>
            <span className={experience}>운영 중 발생한 유지보수 및 기능 개선 작업 수행</span>
          </div>

          <div className={wrap}>
            <h4 className={label}>사용 기술</h4>
            <span className={experience}>Vue, Vuex</span>
          </div>
        </div>

        <div className={projectWrap}>
          <h2 className={project}>공감신문, 내외경제, 리서치페이퍼 페이지 개발</h2>

          <div className={wrap}>
            <div className={experience}>뉴스 미디어 페이지의 반응형 웹 개발 및 유지보수</div>
          </div>

          <div className={wrap}>
            <h4 className={label}>주요 업무</h4>
            <span className={experience}>다양한 해상도 대응을 위한 PC/Mobile 전용 페이지 분리 구현</span>
            <span className={experience}>Laravel Blade 템플릿을 사용하여 콘텐츠 레이아웃 개발</span>
            <span className={experience}>운영 이슈에 따른 UI/UX 개선 및 브라우저 호환성 대응</span>
          </div>

          <div className={wrap}>
            <h4 className={label}>사용 기술</h4>
            <span className={experience}>Javascript, Jquery, Blade Template</span>
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
