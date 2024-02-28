import * as React from 'react';

import Svg, {
  SvgProps, Path, Rect, Circle,
} from 'react-native-svg';

const AppUpdate = ({ width = 220, height = 220, ...others }: SvgProps) => (
  <Svg
    {...others}
    width={width}
    height={height}
    viewBox="0 0 220 220"
    fill="none"
  >
    <Path d="M0 0H220V220H0V0Z" fill="white" />
    <Rect x={53} y={18} width={79} height={149} rx={12} fill="#FEF6F3" />
    <Circle cx={19.5} cy={46.5} r={1.5} fill="#F4AB89" />
    <Circle cx={19.5} cy={58.5} r={1.5} fill="#F4AB89" />
    <Circle cx={19.5} cy={70.5} r={1.5} fill="#F4AB89" />
    <Circle cx={19.5} cy={82.5} r={1.5} fill="#F4AB89" />
    <Circle cx={31.5} cy={46.5} r={1.5} fill="#F4AB89" />
    <Circle cx={31.5} cy={58.5} r={1.5} fill="#F4AB89" />
    <Circle cx={31.5} cy={70.5} r={1.5} fill="#F4AB89" />
    <Circle cx={31.5} cy={82.5} r={1.5} fill="#F4AB89" />
    <Circle cx={43.5} cy={46.5} r={1.5} fill="#F4AB89" />
    <Circle cx={43.5} cy={58.5} r={1.5} fill="#F4AB89" />
    <Circle cx={43.5} cy={70.5} r={1.5} fill="#F4AB89" />
    <Circle cx={43.5} cy={82.5} r={1.5} fill="#F4AB89" />
    <Circle cx={55.5} cy={46.5} r={1.5} fill="#F4AB89" />
    <Circle cx={55.5} cy={58.5} r={1.5} fill="#F4AB89" />
    <Circle cx={55.5} cy={70.5} r={1.5} fill="#F4AB89" />
    <Circle cx={55.5} cy={82.5} r={1.5} fill="#F4AB89" />
    <Circle cx={165.5} cy={137.5} r={1.5} fill="#F4AB89" />
    <Circle cx={165.5} cy={149.5} r={1.5} fill="#F4AB89" />
    <Circle cx={165.5} cy={161.5} r={1.5} fill="#F4AB89" />
    <Circle cx={165.5} cy={173.5} r={1.5} fill="#F4AB89" />
    <Circle cx={177.5} cy={137.5} r={1.5} fill="#F4AB89" />
    <Circle cx={177.5} cy={149.5} r={1.5} fill="#F4AB89" />
    <Circle cx={177.5} cy={161.5} r={1.5} fill="#F4AB89" />
    <Circle cx={177.5} cy={173.5} r={1.5} fill="#F4AB89" />
    <Circle cx={189.5} cy={137.5} r={1.5} fill="#F4AB89" />
    <Circle cx={189.5} cy={149.5} r={1.5} fill="#F4AB89" />
    <Circle cx={189.5} cy={161.5} r={1.5} fill="#F4AB89" />
    <Circle cx={189.5} cy={173.5} r={1.5} fill="#F4AB89" />
    <Circle cx={201.5} cy={137.5} r={1.5} fill="#F4AB89" />
    <Circle cx={201.5} cy={149.5} r={1.5} fill="#F4AB89" />
    <Circle cx={201.5} cy={161.5} r={1.5} fill="#F4AB89" />
    <Circle cx={201.5} cy={173.5} r={1.5} fill="#F4AB89" />
    <Rect
      x={71}
      y={35}
      width={78.9474}
      height={150}
      rx={16}
      fill="white"
      stroke="#85A0D2"
      strokeWidth={2}
    />
    <Path
      d="M95 35H126.579V38.1053C126.579 40.3144 124.788 42.1053 122.579 42.1053H99C96.7909 42.1053 95 40.3144 95 38.1053V35Z"
      fill="#85A0D2"
    />
    <Circle
      cx={110.316}
      cy={172.368}
      r={6.31579}
      fill="white"
      stroke="#85A0D2"
      strokeWidth={2}
    />
    <Circle
      cx={110.999}
      cy={109.001}
      r={22.6667}
      fill="#19DB66"
      stroke="#DCFAE8"
      strokeWidth={4}
    />
    <Path
      d="M116.666 104.466L108.239 113.533L104.199 109.185"
      stroke="white"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default AppUpdate;
