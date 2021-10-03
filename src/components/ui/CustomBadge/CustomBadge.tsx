import * as React from 'react';
import { styled } from '@mui/system';
import BadgeUnstyled from '@mui/core/BadgeUnstyled';
import { lightPrimary,primary } from '../../../theme/default';

const CustomBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
  display: inline-block;

  & .MuiBadge-badge {
    z-index: auto;
    color: ${primary};
    width:20px;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: ${lightPrimary};
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
  }

  & .MuiBadge-dot {
    padding: 0;
    z-index: auto;
    min-width: 6px;
    width: 6px;
    height: 6px;
    background: #ff4d4f;
    border-radius: 100%;
    box-shadow: 0 0 0 1px #fff;
  }

  & .MuiBadge-anchorOriginTopRightCircular {
    position: absolute;
    top: 5px;
    right: 10px;
    left:10px;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
`;
export default CustomBadge