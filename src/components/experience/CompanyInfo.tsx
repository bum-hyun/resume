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
      <h5 className={h5}>{companyName}</h5>
      <span className={span1}>{companyRole}</span>
      <a className={a} href={url} target={'_blank'} rel={'noreferrer'}>
        {url}
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
  margin-right: 20px;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin: 24px 0;
  }
`;

const h5 = css`
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 8px;
  color: #212121;
`;

const span1 = css`
  font-size: 12px;
  font-weight: 500;
`;

const a = css`
  font-size: 12px;
  text-decoration: underline;
`;

const span2 = css`
  font-size: 12px;
`;
