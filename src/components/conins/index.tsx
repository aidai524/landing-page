import React from 'react';
import { IconCircle, IconCoin1, IconCoin2, IconCoin3, IconCoin4 } from '../icon';

export const Coins = () => {
  return (
    <div className="relative flex w-full h-32 s:hidden">
      <IconCircle className="absolute -bottom-1" style={{ left: '36%' }} />

      <IconCoin1 className="absolute -bottom-5" style={{ left: '45%' }} />

      <IconCircle className="absolute -bottom-1" style={{ left: '55%' }} />

      <IconCoin2 className="absolute -bottom-5" style={{ left: '60%' }} />

      <IconCoin3 className="absolute -bottom-5" style={{ left: '66%' }} />

      <IconCircle className="absolute -bottom-1" style={{ left: '80%' }} />

      <IconCoin4 className="absolute -bottom-5" style={{ left: '80%' }} />

      <svg
        className="absolute bottom-0"
        style={{ left: '10%' }}
        width="975"
        height="2"
        viewBox="0 0 975 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1L975 0.999915" stroke="url(#paint0_linear_497:798)" stroke-width="2" />
        <defs>
          <linearGradient
            id="paint0_linear_497:798"
            x1="0"
            y1="1.98141"
            x2="965"
            y2="1.98141"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-opacity="0" />
            <stop offset="0.8125" stop-color="#00C6A2" />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const MCoins = () => {
  return (
    <div className="flex w-full -bottom-36 l:hidden">
      <svg
        className="absolute bottom-0"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_bd_238:633)">
          <circle cx="27" cy="27" r="16" fill="url(#paint0_linear_238:633)" shape-rendering="crispEdges" />
          <circle
            cx="27"
            cy="27"
            r="16"
            stroke="url(#paint1_linear_238:633)"
            stroke-width="2"
            shape-rendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_bd_238:633"
            x="0"
            y="0"
            width="54"
            height="54"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="5" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_238:633" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="effect1_backgroundBlur_238:633" result="effect2_dropShadow_238:633" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_238:633" result="shape" />
          </filter>
          <linearGradient
            id="paint0_linear_238:633"
            x1="42.572"
            y1="42.12"
            x2="4.7209"
            y2="28.6677"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0641396" stop-color="white" stop-opacity="0.15" />
            <stop offset="1" stop-color="white" stop-opacity="0.22" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_238:633"
            x1="42.2988"
            y1="11"
            x2="6.16026"
            y2="25.1695"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C1FFF4" />
            <stop offset="0.588542" stop-color="#73818B" stop-opacity="0.56" />
            <stop offset="1" stop-color="#BFCDFF" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="absolute bottom-0"
        style={{ left: '18%' }}
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_bd_238:634)">
          <circle
            cx="40"
            cy="40"
            r="28.2683"
            transform="rotate(-32.304 40 40)"
            fill="url(#paint0_linear_238:634)"
            shape-rendering="crispEdges"
          />
          <circle
            cx="40"
            cy="40"
            r="28.2683"
            transform="rotate(-32.304 40 40)"
            stroke="url(#paint1_linear_238:634)"
            stroke-width="3"
            shape-rendering="crispEdges"
          />
        </g>
        <g opacity="0.5">
          <path
            d="M32.4409 50.5442L26.0161 40.3828C23.9324 37.0872 23.9465 30.5431 31.4165 25.82C38.8865 21.0969 45.2244 25.1625 46.6136 27.3596L53.0384 37.521"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M36.6191 45.5974L42.3494 54.6603M41.8372 42.2982L49.4775 54.3821M46.7806 39.1726L50.4271 44.9399C51.1216 46.0385 52.8857 47.5636 55.2571 46.4991C57.3532 45.5582 57.1352 43.3895 57.1352 43.3895"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
          <circle cx="33.131" cy="37.0396" r="1.62462" transform="rotate(-32.304 33.131 37.0396)" fill="white" />
          <circle cx="40.8195" cy="32.1776" r="1.62462" transform="rotate(-32.304 40.8195 32.1776)" fill="white" />
        </g>
        <defs>
          <filter
            id="filter0_bd_238:634"
            x="0.227539"
            y="0.227783"
            width="79.5449"
            height="79.5442"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="5" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_238:634" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="effect1_backgroundBlur_238:634" result="effect2_dropShadow_238:634" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_238:634" result="shape" />
          </filter>
          <linearGradient
            id="paint0_linear_238:634"
            x1="67.5122"
            y1="66.7136"
            x2="0.63795"
            y2="42.9465"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0641396" stop-color="white" stop-opacity="0.15" />
            <stop offset="1" stop-color="white" stop-opacity="0.22" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_238:634"
            x1="67.0295"
            y1="11.7317"
            x2="3.18097"
            y2="36.766"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C1FFF4" />
            <stop offset="0.588542" stop-color="#73818B" stop-opacity="0.56" />
            <stop offset="1" stop-color="#BFCDFF" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="absolute bottom-0 left-1/3"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_bd_238:632)">
          <circle cx="27" cy="27" r="16" fill="url(#paint0_linear_238:632)" shape-rendering="crispEdges" />
          <circle
            cx="27"
            cy="27"
            r="16"
            stroke="url(#paint1_linear_238:632)"
            stroke-width="2"
            shape-rendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_bd_238:632"
            x="0"
            y="0"
            width="54"
            height="54"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="5" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_238:632" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="effect1_backgroundBlur_238:632" result="effect2_dropShadow_238:632" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_238:632" result="shape" />
          </filter>
          <linearGradient
            id="paint0_linear_238:632"
            x1="42.572"
            y1="42.12"
            x2="4.7209"
            y2="28.6677"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0641396" stop-color="white" stop-opacity="0.15" />
            <stop offset="1" stop-color="white" stop-opacity="0.22" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_238:632"
            x1="42.2988"
            y1="11"
            x2="6.16026"
            y2="25.1695"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C1FFF4" />
            <stop offset="0.588542" stop-color="#73818B" stop-opacity="0.56" />
            <stop offset="1" stop-color="#BFCDFF" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="absolute bottom-0"
        style={{ left: '37%' }}
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_bd_238:641)">
          <circle
            cx="40"
            cy="40"
            r="28.2683"
            transform="rotate(-32.304 40 40)"
            fill="url(#paint0_linear_238:641)"
            shape-rendering="crispEdges"
          />
          <circle
            cx="40"
            cy="40"
            r="28.2683"
            transform="rotate(-32.304 40 40)"
            stroke="url(#paint1_linear_238:641)"
            stroke-width="3"
            shape-rendering="crispEdges"
          />
        </g>
        <g opacity="0.5">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53.455 41.836C54.2897 41.5644 54.7547 41.2627 54.7547 40.9448V46.3264C54.7547 47.5152 48.2493 48.479 40.2245 48.479C32.1997 48.479 25.6943 47.5152 25.6943 46.3264V40.9448C25.6943 41.2627 26.1593 41.5644 26.994 41.836C29.2814 42.5801 34.3452 43.0974 40.2245 43.0974C46.1038 43.0974 51.1676 42.5801 53.455 41.836ZM53.455 43.1936C52.6877 43.4104 51.7462 43.596 50.6893 43.7526C47.9794 44.1541 44.2802 44.3971 40.2245 44.3971C36.1688 44.3971 32.4696 44.1541 29.7597 43.7526C28.7028 43.596 27.7613 43.4104 26.994 43.1936V45.8327C27.0664 45.8639 27.1561 45.8992 27.2658 45.9376C27.8864 46.155 28.8561 46.3725 30.1406 46.5628C32.6895 46.9405 36.2554 47.1793 40.2245 47.1793C44.1936 47.1793 47.7595 46.9405 50.3084 46.5628C51.5929 46.3725 52.5626 46.155 53.1832 45.9376C53.2929 45.8992 53.3826 45.8639 53.455 45.8327V43.1936ZM53.7111 45.6966C53.7114 45.6966 53.708 45.6995 53.7 45.7054C53.7068 45.6995 53.7108 45.6966 53.7111 45.6966ZM26.7379 45.6966C26.7382 45.6966 26.7422 45.6995 26.749 45.7054C26.741 45.6996 26.7376 45.6966 26.7379 45.6966Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53.455 48.294C54.2897 48.0224 54.7547 47.7207 54.7547 47.4028V52.7844C54.7547 53.9732 48.2493 54.937 40.2245 54.937C32.1997 54.937 25.6943 53.9732 25.6943 52.7844V47.4028C25.6943 47.7207 26.1593 48.0224 26.994 48.294C29.2814 49.0381 34.3452 49.5554 40.2245 49.5554C46.1038 49.5554 51.1676 49.0381 53.455 48.294ZM53.455 49.6516C52.6877 49.8684 51.7462 50.0541 50.6893 50.2106C47.9794 50.6121 44.2802 50.8551 40.2245 50.8551C36.1688 50.8551 32.4696 50.6121 29.7597 50.2106C28.7028 50.0541 27.7613 49.8684 26.994 49.6516V52.2907C27.0664 52.3219 27.1561 52.3572 27.2658 52.3956C27.8864 52.613 28.8561 52.8306 30.1406 53.0208C32.6895 53.3985 36.2554 53.6373 40.2245 53.6373C44.1936 53.6373 47.7595 53.3985 50.3084 53.0208C51.5929 52.8306 52.5626 52.613 53.1832 52.3956C53.2929 52.3572 53.3826 52.3219 53.455 52.2907V49.6516ZM53.7111 52.1546C53.7114 52.1546 53.708 52.1576 53.7 52.1634C53.7068 52.1575 53.7108 52.1546 53.7111 52.1546ZM26.7379 52.1546C26.7382 52.1546 26.7422 52.1575 26.749 52.1635C26.741 52.1576 26.7376 52.1546 26.7379 52.1546Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53.455 35.3782C52.3643 35.733 50.6425 36.0363 48.5019 36.2565C47.5165 38.3403 45.6476 40.064 42.6568 40.6911C41.9161 40.8464 41.1065 40.9344 40.2245 40.944C40.1709 40.9446 40.1169 40.9449 40.0628 40.9449C39.1927 40.9449 38.3921 40.8543 37.6581 40.6876C34.8621 40.0525 33.034 38.3123 32.0297 36.2649C29.8509 36.0441 28.0987 35.7376 26.994 35.3782C26.1593 35.1067 25.6943 34.8049 25.6943 34.4871V39.8686C25.6943 40.9194 30.7766 41.7944 37.4983 41.9834C38.3302 42.0068 39.1872 42.0197 40.0628 42.0211C40.1166 42.0212 40.1705 42.0212 40.2245 42.0212C41.104 42.0212 41.9652 42.0096 42.8016 41.9875C49.597 41.8073 54.7547 40.9272 54.7547 39.8686V34.4871C54.7547 34.8049 54.2897 35.1067 53.455 35.3782ZM53.455 36.7359C53.4341 36.7418 53.4132 36.7477 53.3922 36.7535C52.3467 37.043 50.9532 37.2848 49.3322 37.4731C48.653 38.6594 47.7112 39.7023 46.4934 40.5081C47.9213 40.4049 49.2094 40.2679 50.3084 40.1051C51.5929 39.9148 52.5626 39.6972 53.1832 39.4799C53.2929 39.4414 53.3826 39.4061 53.455 39.3749V36.7359ZM53.7111 39.2388C53.7114 39.2388 53.708 39.2418 53.7 39.2477C53.7068 39.2417 53.7108 39.2388 53.7111 39.2388ZM34.0151 40.5124C32.8243 39.6989 31.892 38.651 31.2097 37.4838C29.5618 37.2955 28.1451 37.0524 27.0833 36.7608C27.0535 36.7526 27.0237 36.7443 26.994 36.7359V39.3749C27.0664 39.4061 27.1561 39.4414 27.2658 39.4799C27.8864 39.6972 28.8561 39.9148 30.1406 40.1051C31.2549 40.2701 32.5635 40.4087 34.0151 40.5124ZM26.7379 39.2388C26.7382 39.2388 26.7422 39.2417 26.749 39.2477C26.741 39.2418 26.7376 39.2388 26.7379 39.2388Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.7256 34.0493C26.7246 34.0492 26.732 34.0427 26.7509 34.0298C26.7361 34.043 26.7267 34.0494 26.7256 34.0493ZM28.7682 33.4107C29.0929 33.3453 29.4483 33.2819 29.8328 33.2213C29.8461 33.3498 29.8617 33.4785 29.8797 33.6074C29.4778 33.5446 29.1066 33.4788 28.7682 33.4107ZM31.2248 33.792C31.3056 34.2436 31.4197 34.6952 31.5686 35.1398C31.073 35.0853 30.6016 35.0261 30.1574 34.9629C27.4064 34.5712 25.6943 34.0206 25.6943 33.4107C25.6943 32.8293 27.25 32.3017 29.7783 31.9144C30.1888 31.8515 30.625 31.7923 31.0842 31.7372C31.0658 32.1636 31.0777 32.6008 31.121 33.042C31.1455 33.2911 31.18 33.5415 31.2248 33.792ZM26.7523 32.7927C26.729 32.7773 26.7201 32.7693 26.7215 32.7692C26.7229 32.7691 26.7345 32.7768 26.7523 32.7927ZM53.727 32.7695C53.7284 32.7696 53.7197 32.7775 53.6969 32.7926C53.7143 32.7769 53.7257 32.7694 53.727 32.7695ZM51.6808 33.4107C51.3598 33.346 51.0089 33.2834 50.6295 33.2234C50.6184 33.3503 50.6052 33.4773 50.5897 33.6042C50.9839 33.5424 51.3482 33.4776 51.6808 33.4107ZM50.3391 34.9561C49.8986 35.0194 49.4311 35.0786 48.9394 35.1333C49.0771 34.6924 49.1807 34.2422 49.252 33.7886C49.291 33.5409 49.3203 33.2922 49.3403 33.0435C49.3755 32.6062 49.382 32.1689 49.3615 31.7368C49.8212 31.792 50.2578 31.8512 50.6686 31.9141C53.1981 32.3015 54.7547 32.8291 54.7547 33.4107C54.7547 34.017 53.0623 34.5649 50.3391 34.9561ZM53.6981 34.0298C53.717 34.0427 53.7244 34.0493 53.7234 34.0493C53.7224 34.0494 53.7129 34.043 53.6981 34.0298Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.1737 20.4951L33.7452 29.891C32.2617 32.8581 33.8438 38.7924 40.1736 38.7924C46.5035 38.7924 48.0863 33.8472 47.0972 30.3855L40.1737 20.4951ZM43.1178 32.3636C44.2103 32.3636 45.0959 31.478 45.0959 30.3856C45.0959 29.2931 44.2103 28.4075 43.1178 28.4075C42.0254 28.4075 41.1398 29.2931 41.1398 30.3856C41.1398 31.478 42.0254 32.3636 43.1178 32.3636Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_bd_238:641"
            x="0.227539"
            y="0.227783"
            width="79.5449"
            height="79.5442"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="5" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_238:641" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="effect1_backgroundBlur_238:641" result="effect2_dropShadow_238:641" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_238:641" result="shape" />
          </filter>
          <linearGradient
            id="paint0_linear_238:641"
            x1="67.5122"
            y1="66.7136"
            x2="0.63795"
            y2="42.9465"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0641396" stop-color="white" stop-opacity="0.15" />
            <stop offset="1" stop-color="white" stop-opacity="0.22" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_238:641"
            x1="67.0295"
            y1="11.7317"
            x2="3.18097"
            y2="36.766"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C1FFF4" />
            <stop offset="0.588542" stop-color="#73818B" stop-opacity="0.56" />
            <stop offset="1" stop-color="#BFCDFF" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="absolute bottom-0"
        style={{ left: '69%' }}
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_bd_238:556)">
          <circle cx="27" cy="27" r="16" fill="url(#paint0_linear_238:556)" shape-rendering="crispEdges" />
          <circle
            cx="27"
            cy="27"
            r="16"
            stroke="url(#paint1_linear_238:556)"
            stroke-width="2"
            shape-rendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_bd_238:556"
            x="0"
            y="0"
            width="54"
            height="54"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="5" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_238:556" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="effect1_backgroundBlur_238:556" result="effect2_dropShadow_238:556" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_238:556" result="shape" />
          </filter>
          <linearGradient
            id="paint0_linear_238:556"
            x1="42.572"
            y1="42.12"
            x2="4.7209"
            y2="28.6677"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0641396" stop-color="white" stop-opacity="0.15" />
            <stop offset="1" stop-color="white" stop-opacity="0.22" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_238:556"
            x1="42.2988"
            y1="11"
            x2="6.16026"
            y2="25.1695"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C1FFF4" />
            <stop offset="0.588542" stop-color="#73818B" stop-opacity="0.56" />
            <stop offset="1" stop-color="#BFCDFF" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="absolute bottom-0 left-1/2"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_bd_238:651)">
          <circle
            cx="40"
            cy="40"
            r="28.2683"
            transform="rotate(-32.304 40 40)"
            fill="url(#paint0_linear_238:651)"
            shape-rendering="crispEdges"
          />
          <circle
            cx="40"
            cy="40"
            r="28.2683"
            transform="rotate(-32.304 40 40)"
            stroke="url(#paint1_linear_238:651)"
            stroke-width="3"
            shape-rendering="crispEdges"
          />
        </g>
        <g opacity="0.5">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M45.5567 29.268C38.8411 26.9348 31.4539 30.5873 29.0691 37.4516C26.6842 44.3158 30.2154 51.7617 36.9309 54.095C43.6465 56.4282 51.0337 52.7756 53.4185 45.9114C55.8034 39.0472 52.2722 31.6012 45.5567 29.268ZM28.1142 37.1198C30.6764 29.7451 38.6287 25.7909 45.8884 28.3131C53.1481 30.8354 56.9356 38.8685 54.3734 46.2432C51.8112 53.6179 43.8588 57.5721 36.5992 55.0498C29.3395 52.5276 25.552 44.4945 28.1142 37.1198Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.9113 31.8302C29.8939 26.2195 36.5041 23.4471 42.5674 25.5537C43.9912 26.0483 45.5645 27.0722 46.9835 28.3033C48.4002 29.5326 49.6256 30.936 50.3676 32.1545L51.231 31.6288C50.4224 30.3008 49.1213 28.8199 47.646 27.5398C46.1728 26.2616 44.4884 25.1509 42.8992 24.5988C36.217 22.2772 28.9474 25.4431 25.8355 31.7122C25.5665 32.2541 25.3287 32.819 25.1249 33.4055C24.8642 34.1559 24.6971 34.9454 24.6114 35.7564C24.3347 38.3745 24.9023 41.2448 25.9471 43.8391C26.992 46.4333 28.5316 48.7953 30.2453 50.3887L30.9337 49.6484C29.3501 48.1761 27.8863 45.948 26.8848 43.4614C26.0425 41.3701 25.5398 39.1268 25.5528 37.0322L27.6401 39.299L28.3837 38.6142L25.6428 35.6376C25.7269 34.9755 25.8708 34.3388 26.0798 33.7372C26.1925 33.4128 26.3164 33.0956 26.4508 32.7859L29.0747 35.2657L29.769 34.531L26.9113 31.8302Z"
            fill="white"
          />
          <path
            d="M31.2679 42.4959L32.3163 42.8601L34.4084 39.1116L34.7681 38.4276L34.8311 38.4495L34.6834 39.2072L34.0065 43.4473L35.0492 43.8096L39.379 35.8752L38.1014 35.4313L35.8491 39.8626L35.6853 40.223L35.5535 40.1773L35.6256 39.7849L36.5888 34.9058L35.5919 34.5595L33.311 38.9808L33.13 39.3353L32.9983 39.2895L33.0933 38.9051L34.0794 34.034L32.8018 33.5901L31.2679 42.4959Z"
            fill="white"
          />
          <path
            d="M37.0966 44.521L40.4196 45.6755L40.8615 44.4036L38.9307 43.7328L39.7349 41.4181L41.1214 41.8998L41.5912 40.5477L40.2047 40.066L40.973 37.8545L42.9038 38.5253L43.3457 37.2534L40.0227 36.0989L37.0966 44.521Z"
            fill="white"
          />
          <path
            d="M42.0747 46.2505L43.4612 46.7322L45.9454 39.5821L47.3606 40.0738L47.8025 38.8018L43.5857 37.3368L43.1438 38.6087L44.5589 39.1004L42.0747 46.2505Z"
            fill="white"
          />
          <path
            d="M45.3772 47.3979L46.7694 47.8816L48.0434 44.2149L49.3153 44.6568L48.0413 48.3235L49.4336 48.8072L52.3597 40.3852L50.9675 39.9015L49.7572 43.3849L48.4853 42.943L49.6956 39.4596L48.3033 38.9759L45.3772 47.3979Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.4189 47.8505C24.7867 46.5709 21.1675 46.3365 20.7921 47.417C20.3341 48.7354 24.8792 51.5123 30.9439 53.6194C36.6205 55.5917 41.6164 56.278 42.6082 55.2766C40.6076 55.7592 38.4498 55.6925 36.3614 54.967C32.9267 53.7736 30.4498 51.0654 29.4189 47.8505Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_bd_238:651"
            x="0.227539"
            y="0.227783"
            width="79.5449"
            height="79.5442"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="5" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_238:651" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="effect1_backgroundBlur_238:651" result="effect2_dropShadow_238:651" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_238:651" result="shape" />
          </filter>
          <linearGradient
            id="paint0_linear_238:651"
            x1="67.5122"
            y1="66.7136"
            x2="0.63795"
            y2="42.9465"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0641396" stop-color="white" stop-opacity="0.15" />
            <stop offset="1" stop-color="white" stop-opacity="0.22" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_238:651"
            x1="67.0295"
            y1="11.7317"
            x2="3.18097"
            y2="36.766"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C1FFF4" />
            <stop offset="0.588542" stop-color="#73818B" stop-opacity="0.56" />
            <stop offset="1" stop-color="#BFCDFF" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="absolute bottom-0"
        style={{ left: '74%' }}
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_bd_238:548)">
          <circle
            cx="40"
            cy="40"
            r="28.2683"
            transform="rotate(-32.304 40 40)"
            fill="url(#paint0_linear_238:548)"
            shape-rendering="crispEdges"
          />
          <circle
            cx="40"
            cy="40"
            r="28.2683"
            transform="rotate(-32.304 40 40)"
            stroke="url(#paint1_linear_238:548)"
            stroke-width="3"
            shape-rendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_bd_238:548"
            x="0.227539"
            y="0.227783"
            width="79.5449"
            height="79.5442"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="5" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_238:548" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="effect1_backgroundBlur_238:548" result="effect2_dropShadow_238:548" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_238:548" result="shape" />
          </filter>
          <linearGradient
            id="paint0_linear_238:548"
            x1="67.5122"
            y1="66.7136"
            x2="0.637951"
            y2="42.9465"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0641396" stop-color="white" stop-opacity="0.15" />
            <stop offset="1" stop-color="white" stop-opacity="0.22" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_238:548"
            x1="67.0295"
            y1="11.7317"
            x2="3.18097"
            y2="36.766"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C1FFF4" />
            <stop offset="0.588542" stop-color="#73818B" stop-opacity="0.56" />
            <stop offset="1" stop-color="#BFCDFF" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="absolute bottom-0"
        style={{ left: '74%' }}
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_bd_238:547)">
          <circle
            cx="40"
            cy="40"
            r="28.2683"
            transform="rotate(-32.304 40 40)"
            fill="url(#paint0_linear_238:547)"
            shape-rendering="crispEdges"
          />
          <circle
            cx="40"
            cy="40"
            r="28.2683"
            transform="rotate(-32.304 40 40)"
            stroke="url(#paint1_linear_238:547)"
            stroke-width="3"
            shape-rendering="crispEdges"
          />
        </g>
        <g opacity="0.5">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.0206 25.5104C42.0392 26.4895 41.2606 27.2984 40.2814 27.3171C35.1381 27.415 30.3454 30.6153 28.4605 35.727C26.5756 40.8387 28.1434 46.3843 31.9918 49.7979C32.7245 50.4478 32.7916 51.5685 32.1417 52.3012C31.4919 53.0338 30.3711 53.1009 29.6385 52.4511C24.734 48.1008 22.7259 41.0278 25.133 34.5C27.54 27.9722 33.6592 23.8961 40.2139 23.7712C41.193 23.7526 42.0019 24.5312 42.0206 25.5104ZM48.9035 28.0484C49.5534 27.3157 50.6741 27.2486 51.4068 27.8985C56.3113 32.2488 58.3193 39.3218 55.9122 45.8495C53.5052 52.3773 47.386 56.4535 40.8314 56.5783C39.8522 56.597 39.0433 55.8183 39.0247 54.8392C39.006 53.86 39.7847 53.0511 40.7638 53.0325C45.9071 52.9345 50.6999 49.7342 52.5847 44.6226C54.4696 39.5109 52.9018 33.9652 49.0534 30.5517C48.3207 29.9018 48.2536 28.781 48.9035 28.0484Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.65 30.5639C42.9041 29.8747 43.6688 29.5221 44.3579 29.7762C45.0471 30.0303 45.3998 30.795 45.1456 31.4841L44.6217 32.9049C44.67 32.9368 44.7176 32.9692 44.7643 33.0021C45.2368 33.327 45.6442 33.6919 45.9732 34.1017C46.3011 34.4953 46.5575 34.9209 46.729 35.3791C46.8969 35.8009 47.0058 36.2331 47.0516 36.674C47.1023 37.1036 47.0998 37.5307 47.0426 37.9534C46.9978 38.3436 46.9235 38.718 46.8176 39.0751L46.5487 39.9824L43.3853 38.8159L43.6018 38.0303C43.7072 37.6481 43.7304 37.3198 43.6947 37.0358C43.6568 36.7337 43.5658 36.4732 43.4271 36.2433L43.4215 36.2341L43.4161 36.2246C43.2806 35.987 43.0956 35.7744 42.8501 35.5861L42.8446 35.5819L42.8392 35.5776C42.5859 35.377 42.2924 35.2125 41.9522 35.0871C41.6261 34.9668 41.2906 34.8807 40.9449 34.8286C40.6386 34.7838 40.3644 34.7921 40.1161 34.8432L40.1091 34.8447L40.102 34.846C39.8792 34.8882 39.6845 34.9751 39.5073 35.11L39.5 35.1156C39.3812 35.2042 39.2532 35.3589 39.1481 35.6441C39.0447 35.9245 39.0384 36.1382 39.0783 36.3103C39.1451 36.5505 39.266 36.7959 39.4568 37.0475C39.6813 37.3271 39.9587 37.6083 40.294 37.8893C40.6676 38.1992 41.0568 38.508 41.4616 38.8157C41.971 39.2005 42.4709 39.6006 42.9611 40.016C43.4923 40.4661 43.9469 40.9583 44.3182 41.4944C44.7114 42.0621 44.9713 42.6882 45.0931 43.3651C45.2373 44.1098 45.1315 44.8846 44.8446 45.6625C44.5579 46.4402 44.1493 47.1096 43.6012 47.6401L43.598 47.6432C43.0672 48.152 42.4483 48.521 41.7497 48.7438C41.058 48.9645 40.3206 49.0349 39.5487 48.9709C39.2781 48.9516 39.0057 48.9167 38.7317 48.8667C38.7232 48.8957 38.7136 48.9246 38.703 48.9534L38.3963 49.7852C38.1422 50.4744 37.3775 50.827 36.6884 50.5729C35.9992 50.3188 35.6466 49.5542 35.9007 48.865L36.2074 48.0331C36.2132 48.0174 36.2193 48.0018 36.2256 47.9864C35.862 47.7807 35.5179 47.5413 35.194 47.2686C34.5819 46.7618 34.0808 46.1658 33.6968 45.4828L33.6939 45.4776C33.3135 44.7904 33.0752 44.0447 32.9761 43.2482L32.9756 43.2442C32.8751 42.4053 32.9763 41.5603 33.2609 40.719L33.5529 39.8561L36.7072 41.0193L36.4718 41.8154C36.3507 42.2246 36.3079 42.6107 36.3335 42.9787C36.3687 43.3537 36.4624 43.6974 36.6119 44.0154C36.7665 44.322 36.9813 44.6019 37.2655 44.8558C37.5473 45.1043 37.8955 45.3112 38.3233 45.4689C38.7236 45.6165 39.116 45.7135 39.5017 45.7631C39.8653 45.8033 40.1836 45.7804 40.4651 45.7075L40.4732 45.7054C40.7391 45.6392 40.9735 45.5163 41.186 45.3281L41.1908 45.3239L41.1956 45.3198C41.3795 45.1616 41.5606 44.9082 41.7089 44.5062C41.8056 44.2438 41.804 44.051 41.7602 43.896C41.6928 43.6576 41.569 43.4124 41.3705 43.1597L41.3629 43.1501C41.152 42.8737 40.8831 42.5981 40.5487 42.3255L40.5455 42.3229C40.1815 42.0234 39.8087 41.7276 39.427 41.4356C38.9215 41.0596 38.4206 40.6629 37.9245 40.2457L37.9219 40.2435C37.39 39.7927 36.9313 39.2956 36.551 38.7511L36.5475 38.7461C36.1516 38.171 35.8857 37.5375 35.7531 36.8529L35.752 36.8475C35.6088 36.0827 35.7173 35.2877 36.0123 34.4878C36.2632 33.8074 36.6299 33.2195 37.1298 32.7557L37.1335 32.7523C37.6249 32.3016 38.1968 31.9804 38.8389 31.7922L38.8454 31.7903C39.4831 31.6087 40.1601 31.5581 40.8666 31.6228C41.2977 31.6594 41.734 31.7366 42.175 31.8522L42.65 30.5639Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_bd_238:547"
            x="0.227539"
            y="0.227783"
            width="79.5449"
            height="79.5442"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="5" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_238:547" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="effect1_backgroundBlur_238:547" result="effect2_dropShadow_238:547" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_238:547" result="shape" />
          </filter>
          <linearGradient
            id="paint0_linear_238:547"
            x1="67.5122"
            y1="66.7136"
            x2="0.637951"
            y2="42.9465"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0641396" stop-color="white" stop-opacity="0.15" />
            <stop offset="1" stop-color="white" stop-opacity="0.22" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_238:547"
            x1="67.0295"
            y1="11.7317"
            x2="3.18097"
            y2="36.766"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C1FFF4" />
            <stop offset="0.588542" stop-color="#73818B" stop-opacity="0.56" />
            <stop offset="1" stop-color="#BFCDFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
