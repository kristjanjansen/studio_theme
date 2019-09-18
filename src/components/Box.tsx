/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useTheme } from "emotion-theming";

const Box: React.FC = () => {
  const theme: any = useTheme();
  
  return (
    <div style={{ height: '30vh', margin: '25px', background: theme.colors.gray400 }}>
      <Input>aa</Input>
    </div>
  );
};

export default Box;

const Input = styled.div`
  outline: none;
  width: 36px;
  margin: 0 6px;
  background-color: ${(p: any) => p.theme.colors.gray400};
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  border-radius: 3px;
  text-align: center;
`

//   color: ${p => p.theme.main.foreground};
