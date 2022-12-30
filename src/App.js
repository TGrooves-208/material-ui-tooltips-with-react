import React, {useState} from 'react';
import "./App.css";
import ReactTooltip from "react-tooltip";
import styled from 'styled-components';
import { withStyles } from "@material-ui/core/styles";
import MaterialTooltip from '@mui/material/Tooltip';
import { TextField } from '@material-ui/core';

const Container = styled.div` 
  background-color: lightblue;
  width: 300px;
  margin: 40px auto;
  padding: 10px;
  text-align: center;
`;

const StyledReactTooltip = styled(ReactTooltip)` 
  background-color: black !important;
  color: white !important;
  box-shadow: 0px 2px 20px lightgrey;
  &:after {
    border-top-color: black !important;
  }
`;

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11
  },
  arrow: {
    color: theme.palette.common.white
  }
}))(MaterialTooltip);



function App() {
  const [enabledThing, setEnabledThing] = useState(false);
  return (
    <div>
      <Container data-tip data-for="happyFace">
      react-tooltip-default

      </Container>
      <ReactTooltip id="happyFace">
        <span>Show happy face</span>
      </ReactTooltip>
      <Container data-tip data-for="sadFace">
        react-tooltip styled
      </Container>
      <StyledReactTooltip id="sadFace" effect="solid">
        <span>Text displayed in a span</span>
      </StyledReactTooltip>
      <MaterialTooltip title="Material UI Tooltip">
        <Container>
          Material UI Default
        </Container>
      </MaterialTooltip>
      <MaterialTooltip 
      interactive
      PopperProps={{
        modifiers: {
          offset: {
            enabled: true,
            offset: "0px, -10px"
          }
        }
      }} 
      arrow 
      title="Material UI Tooltip Interactive">
        <Container>
          Material UI Interactive
        </Container>
      </MaterialTooltip>
      <LightTooltip 
      interactive
      PopperProps={{
        modifiers: {
          offset: {
            enabled: true,
            offset: "0px, -10px"
          }
        }
      }} 
      arrow 
      title={
        <label>
          Set thing 
          <input  onChange={e => {
            setEnabledThing(e.target.checked)
          }}
          checked={enabledThing} type="checkbox"/>
        </label>
      }>
        <Container>
          Material UI Interactive
         <div>Thing set? {enabledThing ? 'yes' : 'no' }</div> 
        </Container>
      </LightTooltip>
    </div>
  );
}

export default App;
