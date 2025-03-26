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
            <h4 className={label}>회고</h4>
            <span className={remembrance}>
              이 프로젝트를 통해 서비스의 초기 기획부터 개발, 배포까지 전 과정을 경험할 수 있었습니다. 웹뷰를 활용해 모바일과 연결하는 작업부터 앱 스토어 배포까지 직접 진행하며, 서비스 전반에 걸친
              기술적 이해도를 높일 수 있었습니다.
            </span>
            <span className={remembrance}>
              특히, 사용자와 긴밀하게 연결된 서비스인 만큼 빈번한 요구사항 변경과 다양한 에러 처리 경험을 통해 문제 해결 역량을 키울 수 있었고, 여러 기술을 실무에서 직접 다뤄보는 기회도 얻었습니다.
            </span>
            <span className={remembrance}>
              다만, 앱 기술 스택 선정 과정에서 신중하지 못했던 점은 아쉬움으로 남습니다. 앱의 비중이 늘어날 것에 대한 생각을 못해 React Native로 전환하는 추가 비용이 발생했기 때문입니다. 이 경험을
              바탕으로, 앞으로는 기술 스택 선택 시 장기적인 유지 보수와 확장성을 더욱 깊이 고민하고 고려할 것입니다.
            </span>
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
            <h4 className={label}>회고</h4>
            <span className={remembrance}>
              이미 서비스되고 있는 플랫폼의 추가 기능 개발과 유지 보수를 담당했습니다. 그중 가장 기억에 남는 업무는 고객 상태 데이터를 정리하고 리팩토링한 경험입니다.
            </span>
            <span className={remembrance}>
              당시 고객 팝업, 예약 정보, 고객 정보가 각각 서로 다른 고객 데이터를 참조하고 있어, 동일한 고객이라도 예약을 클릭하거나 검색했을 때 데이터가 불일치하는 문제가 발생하고 있었습니다. 이
              부분은 서비스 내에서 가장 많이 사용되며 오류 보고가 집중되는 기능이었지만, 중요한 핵심 영역인 만큼 쉽게 수정하기 어려운 상황이었습니다. 저는 이 문제를 반드시 해결해야 한다고 팀에 의견을
              제시했고, 2주간의 기획과 리팩토링 작업을 통해 문제를 해결했습니다. 고객 데이터를 통합하고 사용 흐름을 재정비한 결과, 데이터 불일치 문제를 개선하고 서비스 안정성을 높일 수 있었습니다.
            </span>
            <span className={remembrance}>
              시간 제약으로 인해 사용자의 불편을 완전히 해소하지 못한 부분은 아쉬움으로 남습니다. 서비스 개선 여지가 더 있었지만, 우선순위에 따라 일정 내에서 최대한 효율적으로 문제를 해결하려고
              노력했습니다. 이 경험은 주어진 제약 속에서도 최적의 해결책을 찾아 실행하는 방법을 배우는 좋은 기회가 되었습니다.
            </span>
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
