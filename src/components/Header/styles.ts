import styled from 'styled-components';

export const Container = styled.div`
  height: 90px;
  background: ${props => props.theme.colors.primary};
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;
