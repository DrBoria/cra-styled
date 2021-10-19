import styled from 'styled-components';
import { TWithBasicElementOffsets, withBasicElementOffsets, TFullWidth, withFullWidth } from 'styles/helpers';

type IContainersProps = {
  className?: string;
  style?: any;
};

type ISectionProps = {
  noHeightLimit?: boolean;
  type?: 'light' | 'dark' | 'purple';
} & IContainersProps;

/**
 * @visibleName Containers
 */

// Use this conteiner for wrapping any section on page
// No usage restrictions
export const BasicSection = styled.div<ISectionProps>`
  height: var(--height-screen-mobile);
  max-height: var(--height-screen-max);
  padding: var(--offset-section);
  &[data-theme='light'] {
    background-color: $color-section-background-light;
  }
  &[data-theme='dark'] {
    background-color: $color-section-background-dark;
  }

  @include tablet {
    height: var(--height-screen-tablet);
  }
  @include desktop {
    height: var(--height-screen-desctop);
    padding-right: calc((100% - var(--width-container-content-max)) / 2);
    padding-left: calc((100% - var(--width-container-content-max)) / 2);
  }

  &.noHeightLimit {
    height: auto;
    min-height: var(--height-screen-tablet);
    max-height: unset;
  }
`;

// Use this container for wrapping all page content
// Should be used only once per page
export const PageContainer = styled.div`
  padding: ${({ theme }) => theme.offsets.page};
  min-height: 100vh;
  padding-top: var(--height-header);
`;

export const HeadingContainer = styled.div<TWithBasicElementOffsets & TFullWidth>`
  width: 40%;
  text-align: left;

  ${withFullWidth}
  ${withBasicElementOffsets}
`;
