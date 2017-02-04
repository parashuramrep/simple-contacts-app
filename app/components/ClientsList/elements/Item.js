import styled from 'styled-components';

export default styled.div`
  border-bottom: 1px solid #DDDDDD;
  width: 100%;
  cursor: pointer;
  padding: 10px 15px;
  background: #fdfdfd;

  ${(props) => props.active && 'background: #eee;'}

  &:hover {
    background: #eee;
  }
`;
