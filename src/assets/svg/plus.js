import * as React from "react"
import Svg, { Path } from "react-native-svg"
import Scale from "../../constants/Scale"

const PlusIcon = (props) => (
  <Svg
    width={Scale(28)}
    height={Scale(28)}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M27.14 9.268A8.408 8.408 0 0 0 18.732.874h-9.45A8.408 8.408 0 0 0 .876 9.283v9.434a8.408 8.408 0 0 0 8.408 8.408h9.449a8.408 8.408 0 0 0 8.408-8.408V9.268Zm-1.824 9.449a6.592 6.592 0 0 1-6.584 6.585H9.283a6.591 6.591 0 0 1-6.585-6.585V9.268a6.599 6.599 0 0 1 6.585-6.584h9.449a6.599 6.599 0 0 1 6.584 6.585v9.448Z"
      fill="#000"
      stroke="#000"
      strokeWidth={0.75}
    />
    <Path
      d="M14.915 8.15v-.374H13.1v5.309H7.79V14.9H13.1v5.309h1.816V14.9h5.309v-1.816h-5.309V8.15Z"
      fill="#000"
      stroke="#000"
      strokeWidth={0.75}
    />
  </Svg>
)

export default PlusIcon
