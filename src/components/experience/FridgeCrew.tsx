import { css } from 'styled-system/css';

import CompanyInfo from '@/components/experience/CompanyInfo';

const FridgeCrew = () => {
  return (
    <div className={container}>
      <CompanyInfo companyName={'프릿지크루'} companyRole={'Frontend Developer'} period={'2022.12 - 현재'} url={'https://teepee.kr/'} />
      <div className={content}>
        <div className={projectWrap}>
          <h2 className={project}>헬로티피</h2>

          <div className={wrap}>
            <div className={experience}>반려동물 보호자가 예약을 관리하고 알림장, 동의서 등을 확인할 수 있는 앱인 헬로티피를 개발했습니다.</div>
          </div>

          <div className={wrap}>
            <h4 className={label}>주요 업무</h4>
            <span className={experience}>전체 서비스 개발</span>
            <span className={experience}>Flutter에서 React native로의 변경 작업</span>
            <span className={experience}>Fastlane을 사용한 앱 자동 배포 시스템 구축</span>
            <span className={experience}>Appsflyer를 활용한 원링크 적용</span>
            <span className={experience}>husky와 amplify를 사용하여 안정적인 빌드와 배포 과정 구축</span>
            <span className={experience}>Sentry 도입하여 서비스 모니터링</span>
          </div>

          <div className={wrap}>
            <h4 className={label}>사용 기술</h4>
            <span className={experience}>Typescript, Next.js, React Native, Recoil, Tanstack query, Emotion</span>
          </div>
        </div>

        <div className={projectWrap}>
          <h2 className={project}>티피매니저</h2>

          <div className={wrap}>
            <div className={experience}>반려동물 전용 미용실, 유치원, 호텔, 데이케어 업장의 예약 관리 및 매장 관리 서비스를 추가 개발, 유지보수 및 개선 작업을 했습니다.</div>
          </div>

          <div className={wrap}>
            <h4 className={label}>주요 업무</h4>
            <span className={experience}>예약 관리, 예약금 시스템, 매장 정보 관리 등 개발</span>
            <span className={experience}>서비스 구조 변경 및 리팩토링</span>
            <span className={experience}>Typescript 적용 및 Zustand, React query 적용</span>
            <span className={experience}>husky와 amplify를 사용하여 안정적인 빌드와 배포 과정 구축</span>
          </div>

          <div className={wrap}>
            <h4 className={label}>사용 기술</h4>
            <span className={experience}>Typescript, React, Tanstack query, Emotion, Zustand, Redux, Tailwind</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FridgeCrew;

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
