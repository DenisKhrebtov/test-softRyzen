import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import DEVICE from '../../constants/mediaSizes';

export const InfoWrapper = styled.div`
  background-color: #ffffff;
  padding: 16px 16px 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  transition: transform 300ms ease-in-out;

  p {
    font-size: 14px;
    line-height: 1.43;
    color: #49454f;
    height: 76px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  padding: 8px 16px;

  display: flex;
  justify-content: space-between;

  transition: transform 300ms ease-in-out;

  span {
    color: ${p => p.theme.accent};
    font-size: 14px;
    line-height: 1.7;
  }
`;

export const ReadMoreLink = styled(Link)`
  padding: 10px 24px;
  background-color: ${p => p.theme.accent};
  color: #ffffff;
  border-radius: 8px;

  visibility: hidden;
  margin-left: auto;
  width: fit-content;

  font-size: 14px;
  line-height: 1.43;

  transition: opacity 300ms ease-in-out, visibility 400ms ease-in-out;

  &:hover,
  &:focus {
    opacity: 0.9;
  }
`;

export const Item = styled.li`
  border-radius: 12px;
  box-shadow: ${p => p.theme.boxShadow};
  overflow: hidden;

  background-color: #ffffff;

  width: 271px;
  height: 480px;

  @media ${DEVICE.tablet} {
    width: 100%;
  }

  &:hover ${ReadMoreLink}, &:focus ${ReadMoreLink} {
    visibility: visible;
  }

  &:hover ${InfoWrapper}, &:focus ${InfoWrapper} {
    transform: translateY(-60px);
  }
  &:hover ${Overlay}, &:focus ${Overlay} {
    transform: translateY(-60px);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 336px;

  img {
    height: 100%;
  }
`;

export const TagsWrapper = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  gap: 12px;
`;

export const Tag = styled.span`
  padding: 6px 12px;
  background-color: #ffffff;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: ${p => p.theme.accent};

  color: ${p => {
    if (p.priority === 'High') return p.theme.hight;
    if (p.priority === 'Medium') return p.theme.medium;
    if (p.priority === 'Low') return p.theme.low;
    return p.theme.accent;
  }};
`;
