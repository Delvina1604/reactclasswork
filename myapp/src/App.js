import ArrowProps from "./Component/ArrowProps";
import PropsClass from "./Component/PropsClass";
import PropsFunctional from "./Component/PropsFunctional";
import PropsFunctionalEx1 from "./Component/PropsFunctionalEx1";
import StateClassCom from "./Component/StateClassCom";


export default function App()
{
  return (
    <div>
      <PropsFunctional name="Delvina" college="SKCT"></PropsFunctional>
      <PropsClass college="SKCT"></PropsClass>
      <PropsFunctionalEx1 college="SKCT" place="CBT"></PropsFunctionalEx1>
      <ArrowProps place ="Paris"/>
      <StateClassCom/>
    </div>
  )
}

