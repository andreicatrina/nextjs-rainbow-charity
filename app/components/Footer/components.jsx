import styled from "styled-components";

export const FooterSection = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  padding: 24px 24px 64px 24px;

  @media (max-width: 700px) {
    padding: 24px 24px 32px;
  }
`;

export const FooterLineContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FooterLine = styled.div`
  border-bottom: 1px solid #d8dcdf;
  width: 100%;
  max-width: 1200px;
  height: 48px;
  margin-bottom: 48px;

  @media (max-width: 700px) {
    height: 24px;
    margin-bottom: 24px;
  }
`;

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 32px;

  @media (max-width: 700px) {
    gap: 12px;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;

  h3 {
    display: flex;
    justify-content: center;
    padding: 12px 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 700px) {
    align-items: center;
    padding: 8px;
    h3 {
      font-size: 12px;
      font-weight: 600;
      padding: 4px 0;
    }
  }
`;

export const CasesPhone = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-start;
  font-size: 12px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);

  a {
    font-size: 12px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 6px;
    margin-top: 8px;

    svg {
      width: 14px;
      height: 14px;
    }
  }

  @media (max-width: 700px) {
    font-size: 10px;

    a {
      font-size: 10px;
      svg {
        width: 12px;
        height: 12px;
      }
    }
  }
`;
export const DonationsPhone = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-start;
  font-size: 12px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);

  a {
    font-size: 12px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 6px;
    margin-top: 8px;

    svg {
      width: 14px;
      height: 14px;
    }
  }

  @media (max-width: 700px) {
    font-size: 10px;

    a {
      font-size: 10px;
      svg {
        width: 12px;
        height: 12px;
      }
    }
  }
`;

export const CasesMail = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-start;
  font-size: 12px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);

  a {
    font-size: 12px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid gray;
    padding: 2px 6px;
    border-radius: 6px;
    margin-top: 8px;

    svg {
      width: 14px;
      height: 14px;
    }
  }

  @media (max-width: 700px) {
    font-size: 10px;
    align-items: center;

    a {
      font-size: 10px;
      svg {
        width: 12px;
        height: 12px;
      }
    }
  }
`;
export const CasesDonations = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-start;
  font-size: 12px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);

  a {
    font-size: 12px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid gray;
    padding: 2px 6px;
    border-radius: 6px;
    margin-top: 8px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
  @media (max-width: 700px) {
    font-size: 10px;
    align-items: center;

    a {
      font-size: 10px;
      svg {
        width: 12px;
        height: 12px;
      }
    }
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 12px;

  h3 {
    padding: 12px 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 700px) {
    gap: 12px;
    padding: 8px;
    h3 {
      font-size: 12px;
      font-weight: 600;
      padding: 4px 0;
    }
  }
`;

export const FacebookLink = styled.a`
  svg {
    color: #1877f2;
    width: 24px;
    height: 24px;
    transition: 0.6s;
  }

  :hover {
    svg {
      transform: scale(1.4);
    }
  }
`;
export const InstagramLink = styled.a`
  svg {
    color: #c32aa3;
    width: 24px;
    height: 24px;
    transition: 0.6s;
  }
  :hover {
    svg {
      transform: scale(1.4);
    }
  }
`;
export const WhatsappLink = styled.a`
  svg {
    color: #25d366;
    width: 24px;
    height: 24px;
    transition: 0.6s;
  }
  :hover {
    svg {
      transform: scale(1.4);
    }
  }
`;
export const GoogleMapsLink = styled.a`
  svg {
    color: #ea4335;
    width: 24px;
    height: 24px;
    transition: 0.6s;
  }
  :hover {
    svg {
      transform: scale(1.4);
    }
  }
`;

export const SocialsLinksContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const FooterCompanyDetails = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;

  div {
    width: 220px;
  }

  p {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 800px) {
    p {
      font-size: 10px;
    }
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
`;