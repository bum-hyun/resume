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
            <div className={experience}>기업용 사내 교육 솔루션 `터치클래스`의 기능 고도화 및 유지보수</div>
          </div>

          <div className={wrap}>
            <h4 className={label}>주요 업무</h4>
            <span className={experience}>레거시 jQuery 기반 코드 리팩토링 및 Vue 도입</span>
            <span className={experience}>교육 자료 에디터 안정화 및 기능 고도화</span>
            <span className={experience}>교육 자료 큐레이션 페이지 재구성 및 반응형 구현</span>
          </div>

          <div className={wrap}>
            <h4 className={label}>사용 기술</h4>
            <span className={experience}>Javascript, Vue, Vuex, Jquery</span>
          </div>
        </div>

        <div className={projectWrap}>
          <h2 className={project}>터치투게더</h2>

          <div className={wrap}>
            <div className={experience}>기업형 사내 소셜 피드 서비스 `터치투게더` 기능 개발 및 유지보수</div>
          </div>

          <div className={wrap}>
            <h4 className={label}>주요 업무</h4>
            <span className={experience}>피드 목록, 작성, 댓글 등 주요 인터랙션 기능 구현</span>
            <span className={experience}>ProseMirror 기반 에디터 커스터마이징 및 입력 안정성 확보</span>
            <span className={experience}>Emotion 기반 스타일링 적용 및 UI 일관성 개선</span>
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
