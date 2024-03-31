import { styled } from "styled-components"
import { topicStyles } from "../../styled/lib/topic";

export const TopicText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
`;

export const CardTopic = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $themeColor }) =>
        topicStyles[$themeColor]?.backgroundColor || "#94a6be"};

  ${TopicText} {
    color: ${({ $themeColor }) => topicStyles[$themeColor]?.color || "#ffffff"};
  }
`;
