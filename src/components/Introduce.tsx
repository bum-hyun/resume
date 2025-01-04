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
          <strong>뉴스 기사 관리 플랫폼</strong>, <strong>사내 온라인 교육 자료 관리 플랫폼</strong>, <strong>반려동물 케어 업장들의 예약 관리 플랫폼 및 고객들을 위한 예약 어플리케이션</strong>을
          만들어 왔습니다.
        </p>
        <p className={p}>
          스타트업 환경에서 다수의 프로젝트를 진행하며 사용자 경험을 증대시키기 위한 노력들을 해왔습니다. 그 과정에서 자연스럽게 <strong>개발 일정을 산출하고 관리 능력과 문제를 해결하는 능력</strong>
          이 커졌습니다.
        </p>
        <p className={p}>
          제 포지션에서 <strong>주도적으로 업무를 진행하며, 기꺼이 책임지는 환경</strong>을 선호합니다.
        </p>

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
  font-size: 16px;
  color: #121212;
  white-space: pre-wrap;
`;

const etc = css`
  margin-top: 16px;
`;
