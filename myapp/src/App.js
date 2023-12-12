import ArrowProps from "./Component/ArrowProps";
import DefaultProps from "./Component/DefaultProps";
import DynamicRendering from "./Component/DynamicRendering";
import Parent from "./Component/ParentChildCommunication";
import PropsClass from "./Component/PropsClass";
import PropsFunctional from "./Component/PropsFunctional";
import PropsFunctionalEx1 from "./Component/PropsFunctionalEx1";
import StateClassCom from "./Component/StateClassCom";
import StateFunction from "./Component/StateFunction";
import StateHoldObject from "./Component/StateHoldObject";
import TwoWayBinding from "./Component/TwoWayBinding";


export default function App()
{
  return (
    <div>
      <PropsFunctional name="Delvina" college="SKCT"></PropsFunctional>
      <PropsClass college="SKCT"></PropsClass>
      <PropsFunctionalEx1 college="SKCT" place="CBT"></PropsFunctionalEx1>
      <ArrowProps place ="Paris"/>
      <StateClassCom/>
      <StateFunction/>
      <StateHoldObject/>
      <Parent/>
      <TwoWayBinding/>
      <DynamicRendering/>
      <DefaultProps/>
    </div>
  )
}

