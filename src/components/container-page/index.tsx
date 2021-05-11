import React from 'react';
import { Container } from './style';

interface Props {
  paddingH?: number,
  paddingT?: number
};

const ContainerPage: React.FC<Props> = ({ children, ...Props }) => {
  return (
    <Container {...Props}>
      {children}
    </Container>
  );
};

export default ContainerPage;