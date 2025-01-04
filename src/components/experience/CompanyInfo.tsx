import { css } from 'styled-system/css';

interface ICompanyInfoProps {
  companyName: string;
  companyRole: string;
  period: string;
  url?: string;
}

const CompanyInfo = ({ companyName, companyRole, url, period }: ICompanyInfoProps) => {
  return (
    <div className={company}>
      <h3 className={h3}>{companyName}</h3>
      <span className={span1}>{companyRole}</span>
      <a className={span2} href={url} target={'_blank'} rel={'noreferrer'}>
        링크
      </a>
      <span className={span2}>{period}</span>
    </div>
  );
};

export default CompanyInfo;

const company = css`
  flex: none;
  display: flex;
  flex-direction: column;
  width: 240px;

  @media screen and (max-width: 960px) {
    margin: 24px 0;
  }
`;

const h3 = css`
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 8px;
  color: #212121;
`;

const span1 = css`
  font-weight: 500;
`;

const span2 = css``;