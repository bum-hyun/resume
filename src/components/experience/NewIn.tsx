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
            <h4 className={label}>개요</h4>
            <div className={experience}>기업 사내 교육용 솔루션인 터치클래스의 추가 개발 및 유지보수, 개선을 담당했습니다.</div>
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
            <h4 className={label}>개요</h4>
            <div className={experience}>기업 사내용 소셜 미디어인 터치투게더의 기능 개발 및 유지보수를 담당했습니다.</div>
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
  margin-bottom: 16px;
`;

const wrap = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

const label = css`
  margin-bottom: 8px;
`;

const experience = css``;
