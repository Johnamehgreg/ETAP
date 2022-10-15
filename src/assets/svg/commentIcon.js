import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CommentIcon = (props) => (
  <Svg
    width={21}
    height={21}
    fill="#000"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m18.264 14.52.027-.017.01-.007a8.387 8.387 0 1 0-4.326 4.001l4.29-3.977Zm0 0-.014.028m.014-.028-.014.028m0 0a2.456 2.456 0 0 0-.244 1.574v.002m.244-1.576-.244 1.575m0 0 .55 2.917a.18.18 0 0 1-.06.166m-.49-3.082.49 3.082m0 0-.004.005m.005-.005-.005.005m0 0a.17.17 0 0 1-.169.039m.17-.04-.17.04m0 0-2.687-.85a2.231 2.231 0 0 0-.662-.106h-.003m3.352.956-3.352-.956m0 0c-.341.004-.68.073-.995.203l.995-.203Zm-.494 1.497.002-.001a1.126 1.126 0 0 1 .754-.05l2.71.774c.146.047.3.072.453.074h.002a1.555 1.555 0 0 0 1.523-1.842l-.569-2.904a1.175 1.175 0 0 1 .12-.703l-.112-.057.112.056a9.693 9.693 0 0 0 .785-6.648 9.763 9.763 0 1 0-5.78 11.3Z"
      fill="none"
      stroke="#000"
      strokeWidth={0.25}
    />
  </Svg>
)

export default CommentIcon
