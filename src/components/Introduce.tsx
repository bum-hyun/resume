import Image from 'next/image';
import { css } from 'styled-system/css';

const Introduce = () => {
  return (
    <section className={section}>
      <div className={profile}>
        <Image src={'/resume/profile.jpeg'} alt={'프로필 이미지'} width={240} height={240} />
      </div>
      <div className={text}>
        <h3 className={h3}>
          <strong>저에 대하여</strong>
        </h3>
        <p className={p}>
          <strong>뉴스 기사 관리 플랫폼</strong>, <strong>사내 온라인 교육 자료 관리 플랫폼</strong>, <strong>반려동물 케어 업장들의 예약 관리 플랫폼 및 고객들을 위한 예약 어플리케이션</strong> 등
          다양한 프로젝트를 주도하며, 사용자 경험을 중심으로 한 UI/UX를 구현해왔습니다.
        </p>

        <p className={p}>
          스타트업 환경에 최적화된 인재로서, 저는 타이트한 개발 일정과 빠르게 변화하는 요구사항에 유연하게 적응하는 역량을 갖추고 있습니다. 급변하는 시장 반응에 발맞춰 빠른 프로토타이핑과 기능 개선을
          통해 서비스의 가치를 빠르게 검증하는 데 기여해왔습니다.
        </p>

        <p className={p}>
          특히 주도적으로 업무를 이끌고, 책임감 있는 자세로 조직의 목표 달성을 위해 노력하는 환경을 선호합니다. 프로젝트의 초기 기획 단계부터 서비스 출시 이후 유지 보수에 이르기까지, 기술적 문제
          해결과 지속적인 개선을 통해 더 나은 제품을 만드는 데 열정을 쏟고 있습니다.
        </p>

        <p className={p}>저는 앞으로도 기술로 문제를 해결하고 사용자에게 가치 있는 경험을 제공하는 프론트엔드 개발자로 성장하며, 팀과 회사의 성장을 함께 도모하고자 합니다.</p>

        <div className={etc}>
          <p>
            {'이메일: '}
            <strong>
              <a href={'mailto:ru_bryunak@naver.com'} target={'_blank'} rel={'noreferrer'}>
                ru_bryunak@naver.com
              </a>
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduce;

const section = css`
  display: flex;
  align-items: center;
  padding: 24px 0;
`;

const profile = css`
  flex: none;
  width: 200px;
  margin-right: 36px;

  > img {
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const text = css`
  flex: 1;
`;

const h3 = css`
  font-size: 24px;
  line-height: 36px;
  margin-top: 6px;
  margin-bottom: 16px;
  color: #212121;
`;

const p = css`
  margin-bottom: 12px;
  font-size: 16px;
  color: #121212;
  white-space: pre-wrap;
`;

const etc = css`
  margin-top: 16px;
`;
