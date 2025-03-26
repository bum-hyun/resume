import { css } from 'styled-system/css';

import CompanyInfo from '@/components/experience/CompanyInfo';

const NewIn = () => {
  return (
    <div className={container}>
      <CompanyInfo companyName={'뉴인'} companyRole={'Frontend Developer'} period={'2020.06 - 2021.08'} url={'https://touchclass.com/ko/'} />
      <div className={content}>
        <div className={projectWrap}>
          <h2 className={project}>터치클래스</h2>

          <div className={wrap}>
            <div className={experience}>기업 사내 교육용 솔루션인 터치클래스의 추가 개발 및 유지보수, 개선을 담당했습니다.</div>
          </div>

          <div className={wrap}>
            <h4 className={label}>회고</h4>
            <span className={remembrance}>
              기존 서비스의 유지 보수 업무를 주로 담당했습니다. 새로운 서비스 개발에 대한 기대감이 있었지만, 개발 기획이 지속적으로 지연되면서 업무 시간의 대부분을 레거시 코드 리팩토링에 할애해야
              했습니다.
            </span>
            <span className={remembrance}>아쉬움이 남는 부분이긴 하지만, 이 과정에서 레거시 코드의 구조를 분석하고 개선하는 경험을 쌓을 수 있었습니다.</span>
          </div>

          <div className={wrap}>
            <h4 className={label}>주요 업무</h4>
            <span className={experience}>레거시 코드 리팩토링, 공통 기능 모듈화</span>
            <span className={experience}>교육 자료 생성 에디터 고도화 및 안정화</span>
            <span className={experience}>랜딩페이지 재개발 및 Vue 도입</span>
          </div>

          <div className={wrap}>
            <h4 className={label}>사용 기술</h4>
            <span className={experience}>Javascript, Vue, Vuex, Jquery</span>
          </div>
        </div>

        <div className={projectWrap}>
          <h2 className={project}>터치투게더</h2>

          <div className={wrap}>
            <div className={experience}>기업 사내용 소셜 미디어인 터치투게더의 기능 개발 및 유지보수를 담당했습니다.</div>
          </div>

          <div className={wrap}>
            <h4 className={label}>회고</h4>
            <span className={remembrance}>
              이 경험을 통해 회사에서 처음으로 React를 사용해 개발 경험을 쌓을 수 있었습니다. 당시 선임분으로부터 React 컴포넌트 기반 개발 방식과 코드 컨벤션에 대해서 배울 수 있었습니다.
            </span>
            <span className={remembrance}>하지만 이 프로젝트가 회사의 주력 서비스가 아니었고 제가 주로 담당한 서비스도 아니었기 때문에 깊이 있는 경험을 쌓지 못한 점은 아쉬움으로 남습니다.</span>
          </div>

          <div className={wrap}>
            <h4 className={label}>주요 업무</h4>
            <span className={experience}>터치투게더의 피드 기능 개발</span>
            <span className={experience}>Prosemirror를 사용하여 에디터 기능 개발</span>
          </div>

          <div className={wrap}>
            <h4 className={label}>사용 기술</h4>
            <span className={experience}>React, Prosemirror, Emotion</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewIn;

const container = css`
  display: flex;
  padding-bottom: 24px;
  border-bottom: 1px solid #ddd;

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
