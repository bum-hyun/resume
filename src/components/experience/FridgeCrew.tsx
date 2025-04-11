import { css } from 'styled-system/css';

import CompanyInfo from '@/components/experience/CompanyInfo';

const FridgeCrew = () => {
  return (
    <div className={container}>
      <CompanyInfo companyName={'프릿지크루'} companyRole={'Frontend Developer'} period={'2022.12 - 2025.03'} url={'https://teepee.kr/'} />
      <div className={content}>
        <div className={projectWrap}>
          <h4 className={project}>헬로티피</h4>

          <div className={wrap}>
            <div className={experience}>반려동물 보호자를 위한 예약 및 커뮤니케이션 앱 `헬로티피`의 프론트엔드 전면 개발</div>
          </div>

          <div className={wrap}>
            <h5 className={label}>주요 업무</h5>
            <span className={experience}>Next.js 기반 웹뷰 화면 개발 및 앱 연동</span>
            <span className={experience}>React Native 앱 내 웹뷰 연동 및 브릿지 로직 구현</span>
            <span className={experience}>Fastlane을 활용한 앱 자동 배포 파이프라인 구축</span>
            <span className={experience}>Appsflyer 연동을 통한 원링크 적용 및 마케팅 캠페인 추적</span>
            <span className={experience}>Husky + AWS Amplify를 활용한 안정적 CI/CD 환경 구성</span>
            <span className={experience}>Sentry 도입으로 에러 로깅 및 실시간 관제 체계 마련</span>
          </div>

          <div className={wrap}>
            <h5 className={label}>사용 기술</h5>
            <span className={experience}>Typescript, Next.js, React Native, Recoil, Tanstack query, Emotion</span>
          </div>
        </div>

        <div className={projectWrap}>
          <h4 className={project}>티피매니저</h4>

          <div className={wrap}>
            <div className={experience}>반려동물 업장(미용, 유치원, 호텔 등)의 매장·예약 관리 서비스 유지보수 및 기능 개선</div>
          </div>

          <div className={wrap}>
            <h5 className={label}>주요 업무</h5>
            <span className={experience}>고객 정보 분산 문제 해결 → 고객 정보 중앙화로 클레임 발생률 100% 감소</span>
            <span className={experience}>TanStack Query 도입으로 API 캐싱 최적화 및 중복 호출 제거</span>
            <span className={experience}>비효율적인 컴포넌트 구조 개선 및 TypeScript 기반 전환</span>
            <span className={experience}>Zustand 도입으로 간결한 상태 관리 구조 적용 및 유지보수 효율화</span>
          </div>

          <div className={wrap}>
            <h5 className={label}>사용 기술</h5>
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
  gap: 24px;
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

const experience = css`
  font-size: 14px;
`;
