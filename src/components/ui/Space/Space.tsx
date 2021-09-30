import React from 'react';

interface SpaceProps {
  top? : number,
  bottom?: number
}
export const Space : React.FC<SpaceProps> = ({ top=0, bottom=0}) => {


  return (
   <div style={{marginTop:`${top}px`,marginBottom:`${bottom}px`}}></div>
  );
};


