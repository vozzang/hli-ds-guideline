import { css } from '@emotion/react';

export const Spacing: any = {
  // 4px
  spacing_xxxSmall: '0.25rem',
  // 8px
  spacing_xxSmall: '0.5rem',
  // 12px
  spacing_xSmall: '0.75rem',
  // 16px
  spacing_small: '1rem',
  // 20px
  spacing_medium: '1.25rem',
  // 24px
  spacing_large: '1.5rem',
  // 28px
  spacing_xLarge: '1.75rem',
  // 32px
  spacing_xxLarge: '2rem',
  // 48px
  spacing_xxxLarge: '4rem'
};

const spacingTrans = () => {
  let styles = '';
  let i = 1;
  for (const key in Spacing) {
    if (Object.prototype.hasOwnProperty.call(Spacing, key)) {
      const element = Spacing[key];
      styles += `
      .mb-${i} {
        margin-bottom: ${element} !important;
      }
      .mt-${i} {
        margin-top: ${element} !important;
      }
      .ms-${i} {
        margin-left: ${element} !important;
      }
      .me-${i} {
        margin-right: ${element} !important;
      }
      .p-${i} {
        padding: ${element} !important;
      }
      .pt-${i} {
        padding-top: ${element} !important;
      }
      .pb-${i} {
        padding-bottom: ${element} !important;
      }
      .ps-${i} {
        padding-left: ${element} !important;
      }
      .pe-${i} {
        padding-right: ${element} !important;
      }
      .px-${i} {
        padding-left: ${element} !important;
        padding-right: ${element} !important;
      }
      .py-${i} {
        padding-top: ${element} !important;
        padding-bottom: ${element} !important;
      }
    `;
      i++;
    }
  }
  styles += `
    .mt-0 {
      margin-top: 0 !important;
    }
    .mb-0 {
      margin-bottom: 0 !important;
    }
    .ms-0 {
      margin-left: 0 !important;
    }
    .me-0 {
      margin-right: 0 !important;
    }
    .pt-0 {
      padding-top: 0 !important;
    }
    .pb-0 {
      padding-bottom: 0 !important;
    }
    .ps-0 {
      padding-left: 0 !important;
    }
    .pe-0 {
      padding-right: 0 !important;
    }
  `;
  return styles;
};

export const ResetCss = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    min-width: 1416px;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }

  p {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  h2 {
    margin-bottom: 22px;
    font-weight: 900;
    font-size: 32px;
    line-height: 46px;
    color: #272B2F;
  }

  section {
    padding: 30px;
  }

  .img-box {
    text-align: center;
    background-color: #F6F8FA;
    border-radius: 8px;

    img {
      max-width: 100%;
    }
  }

  .tabs {
    display: flex;
    border-bottom: 1px solid #eee;

    a {
      position: relative;
      display: flex;
      align-items: center;
      height: 50px;
      padding: 0 16px;
      text-decoration: none;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: #333;

      &.active {
        &::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -1px;
          height: 1px;
          background-color: #333;
        }
      }
    }
  }

${spacingTrans()}
`;