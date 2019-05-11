import * as React from "react";
import styled from "styled-components";

const SCard = styled.div`
  box-shadow: 4px 4px 4px ${props => props.theme.color.grey.dark},
    -4px 4px 4px ${props => props.theme.color.grey.dark},
    4px -4px 4px ${props => props.theme.color.grey.dark},
    -4px -4px 4px ${props => props.theme.color.grey.dark};
  display: flex;
  flex-basis: 0;
  flex-direction: column;
  flex-grow: 1;
  margin: 1em 1em 0 1em;
  min-width: 300px;

  &:last-child {
    margin-bottom: 1em;
  }
`;

const SCardHeader = styled.div`
  margin: 16px 16px 0 16px;
`;

const SCardBody = styled.div`
  color: ${props => props.theme.color.primary.dark};
  flex-grow: 1;
  font-size: smaller;
  padding: 16px;
  text-align: justify;
`;

const SCardFooter = styled.div`
  border-top: 1px solid ${props => props.theme.color.grey.dark};
  padding: 16px;
`;

interface IProps {
  body: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
}

const Card = ({ body, footer, header }: IProps) => (
  <SCard>
    {header && <SCardHeader>{header}</SCardHeader>}
    <SCardBody>{body}</SCardBody>
    {footer && <SCardFooter>{footer}</SCardFooter>}
  </SCard>
);

export default Card;
