import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import DEVICE from '../../constants/mediaSizes';

export const Item = styled.div`
  margin-top: 24px;

  max-width: 272px;

  background-color: ${p => p.theme.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${p => p.theme.boxShadow};

  @media ${DEVICE.tablet} {
    max-width: 688px;
  }

  @media ${DEVICE.desktop} {
    max-width: 628px;
    margin-top: 14px;
  }
`;

export const ImageWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  height: 168px;

  @media ${DEVICE.tablet} {
    height: 272px;
  }
`;

export const InfoWrapper = styled.div`
  padding: 24px 16px 40px;

  @media ${DEVICE.tablet} {
    padding: 24px 24px 40px 20px;
  }

  p {
    font-size: 14px;
    line-height: 1.43;
    color: ${p => p.theme.description};

    margin-bottom: 24px;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  margin-bottom: 40px;
`;

export const Tag = styled.li`
  padding: 6px 12px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;

  border-radius: 8px;
  background-color: ${p => p.theme.white};
  color: ${p => {
    if (p.priority) {
      return p.theme[p.priority];
    }
    return p.theme.accent;
  }};

  box-shadow: ${p => p.theme.labelShadow};

  &:last-child {
    font-weight: 400;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
`;

export const DeleteButton = styled.button`
  color: ${p => p.theme.white};
  background-color: ${p => p.theme.accent};

  display: flex;
  justify-content: center;
  align-items: center;

  width: 108px;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;

  padding: 8px 16px;

  border-radius: 4px;

  transition: opacity 300ms ease-in-out;

  &:hover,
  &:focus {
    opacity: 0.9;
  }
`;

export const EditLink = styled(Link)`
  color: ${p => p.theme.accent};
  background-color: transparent;
  border: 1px solid ${p => p.theme.accent};

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;

  padding: 8px 16px;

  border-radius: 4px;

  width: 108px;

  @media ${DEVICE.tablet} {
    width: 55px;
  }

  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

  &:hover,
  &:focus {
    color: ${p => p.theme.white};
    background-color: ${p => p.theme.accent};
  }
`;
