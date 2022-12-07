import React from 'react'
import { chooseIcon } from '../utils'

function WeatherIconWidget({ rainRate, cloudCover, size }) {
  const icon = chooseIcon(rainRate, cloudCover)
  return (
    <div
      className="widget-container"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <svg
        width="150"
        height="150"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {icon == 'cloudy' && (
          <>
            <path
              d="M20.5796 64.6519H20.713C21.6695 64.6385 45.8159 64.3288 56.353 64.1954L61.1829 64.1324C67.1728 64.0559 72.1627 60.0755 73.9127 54.6692C75.3691 54.6492 76.2994 54.6391 76.4227 54.6391C80.0627 54.5889 83.4596 53.1291 85.9991 50.5258C88.5393 47.9225 89.9127 44.4857 89.8657 40.849C89.8026 36.036 87.219 31.6425 83.0788 29.2424C81.869 24.6921 77.729 21.4824 72.9756 21.4824H72.8422C71.9996 21.4919 71.1698 21.6018 70.3662 21.8088C67.8896 17.782 63.5559 15.3457 58.7798 15.3457H58.5995C52.6625 15.4222 47.4661 19.459 45.7798 25.0688C44.993 24.9355 44.19 24.8423 43.363 24.8423H43.3596C37.3429 24.9221 32.2129 28.8317 30.5098 34.4919C30.3931 34.4919 30.2798 34.4751 30.1498 34.4885C27.3562 34.522 24.743 35.6453 22.7932 37.6454C21.1565 39.3257 20.1498 41.4584 19.8931 43.7587C17.3132 43.9289 14.92 45.0287 13.0995 46.8954C11.1498 48.8954 10.0962 51.5354 10.1297 54.3257C10.2028 60.0188 14.8897 64.6521 20.5794 64.6521L20.5796 64.6519ZM58.6339 18.0119C62.7203 17.8986 66.6372 20.2552 68.5475 24.0119C68.8578 24.6218 69.5743 24.8953 70.2111 24.652C71.0609 24.3289 71.9578 24.1587 72.8812 24.1453H72.9811C76.6775 24.1453 79.8812 26.7553 80.6178 30.3853C80.6942 30.782 80.9509 31.1185 81.3075 31.3055C84.894 33.1755 87.1541 36.8423 87.2042 40.8819C87.2444 43.8055 86.1412 46.5689 84.0977 48.6653C82.0575 50.7585 79.3175 51.9321 76.4107 51.9689C76.3141 51.9689 75.6038 51.979 74.4838 51.9924C74.5441 51.4455 74.6373 50.9092 74.6306 50.3456C74.5642 45.5292 71.9804 41.1392 67.8404 38.7356C66.6373 34.2055 62.4804 30.9789 57.6106 30.9789H57.6072C56.764 30.989 55.9304 31.0989 55.1239 31.3087C53.5341 28.7256 51.1574 26.802 48.3538 25.7519C49.7372 21.282 53.8906 18.075 58.6339 18.0119L58.6339 18.0119ZM15.0068 48.7548C16.4599 47.2648 18.4069 46.4283 20.5698 46.4015L21.0698 46.4182C21.4364 46.4417 21.803 46.2916 22.0731 46.0382C22.3432 45.7815 22.4933 45.4115 22.49 45.0382C22.4632 42.9645 23.25 40.9981 24.7031 39.5081C26.1563 38.0181 28.1033 37.1816 30.293 37.1548C30.6462 37.1548 30.9994 37.1782 31.3432 37.2245C32.0363 37.3211 32.6797 36.8612 32.8265 36.1776C33.8734 31.2178 38.3165 27.5711 43.5396 27.5075C47.6831 27.5075 51.4231 29.8044 53.3031 33.5042C53.61 34.1141 54.3298 34.3909 54.9666 34.1476C55.8199 33.8245 56.7166 33.6543 57.7435 33.6409C61.4332 33.6409 64.6436 36.2642 65.3702 39.8775C65.45 40.2743 65.7067 40.6108 66.0633 40.7977C69.6464 42.6643 71.9099 46.3379 71.9634 50.3741C71.9735 51.1409 71.9004 51.8909 71.757 52.6174C71.6102 52.8339 71.507 53.0839 71.5103 53.3641C71.5103 53.3808 71.5203 53.3942 71.5203 53.411C70.2536 57.9807 66.1303 61.3942 61.1538 61.4578L56.3239 61.5209C45.7871 61.6648 21.6439 61.9712 20.6868 61.9813L20.5835 61.9846C16.347 61.9846 12.8537 58.5349 12.8001 54.2915C12.77 52.2145 13.5568 50.2479 15.0065 48.7546L15.0068 48.7548Z"
              fill="#273469"
            />
          </>
        )}
        {icon == 'sun' && (
          <>
            <path
              d="M70.1485 50.0342C70.1485 38.9432 61.1251 29.9199 50.0342 29.9199C38.9434 29.9199 29.9199 38.9434 29.9199 50.0342C29.9199 61.1251 38.9439 70.1485 50.0342 70.1485C61.1245 70.1485 70.1485 61.1251 70.1485 50.0342Z"
              fill="#FFA000"
            />
            <path
              d="M51.7088 20.519V15.7099C51.7088 14.7846 50.9588 14.0352 50.0341 14.0352C49.1094 14.0352 48.3594 14.7846 48.3594 15.7099V20.5184C48.3594 21.4431 49.1088 22.1932 50.0341 22.1932C50.9588 22.1926 51.7088 21.4443 51.7088 20.519Z"
              fill="#FFA000"
            />
            <path
              d="M48.3613 79.5503V84.36C48.3613 85.2847 49.1113 86.0341 50.036 86.0341C50.9608 86.0341 51.7108 85.2847 51.7108 84.3594V79.5497C51.7108 78.625 50.9613 77.875 50.036 77.875C49.1114 77.8756 48.3613 78.625 48.3613 79.5503Z"
              fill="#FFA000"
            />
            <path
              d="M84.3614 48.3613H79.5517C78.627 48.3613 77.877 49.1108 77.877 50.036C77.877 50.9607 78.6264 51.7108 79.5517 51.7108H84.3614C85.2866 51.7108 86.0361 50.9608 86.0361 50.036C86.0361 49.1113 85.2867 48.3613 84.3614 48.3613Z"
              fill="#FFA000"
            />
            <path
              d="M22.1937 50.036C22.1937 49.1114 21.4443 48.3613 20.519 48.3613H15.7099C14.7846 48.3613 14.0352 49.1113 14.0352 50.036C14.0352 50.9608 14.7846 51.7108 15.7099 51.7108H20.5196C21.4443 51.7108 22.1937 50.9608 22.1937 50.036Z"
              fill="#FFA000"
            />
            <path
              d="M75.4918 24.5788C74.8372 23.9242 73.7781 23.9242 73.1241 24.5788L69.7234 27.9795C69.0688 28.6341 69.0688 29.6938 69.7234 30.3472C70.0504 30.6743 70.4784 30.8378 70.9075 30.8378C71.3361 30.8378 71.7641 30.6748 72.0917 30.3472L75.4924 26.9465C76.1453 26.2925 76.1453 25.2322 75.4918 24.5788H75.4918Z"
              fill="#FFA000"
            />
            <path
              d="M24.5798 75.4918C24.9068 75.8188 25.3349 75.9823 25.764 75.9823C26.1926 75.9823 26.6206 75.8194 26.9481 75.4918L30.3489 72.0911C31.0034 71.4376 31.0034 70.3768 30.3489 69.7234C29.6943 69.0688 28.6351 69.0688 27.9811 69.7234L24.5804 73.1241C23.9264 73.7781 23.9264 74.8378 24.5799 75.4918H24.5798Z"
              fill="#FFA000"
            />
            <path
              d="M73.1235 75.4918C73.4505 75.8188 73.8785 75.9823 74.3076 75.9823C74.7362 75.9823 75.1642 75.8194 75.4918 75.4918C76.1463 74.8383 76.1463 73.7775 75.4918 73.1241L72.0911 69.7234C71.4365 69.0688 70.3774 69.0688 69.7234 69.7234C69.0688 70.3768 69.0688 71.4376 69.7234 72.0911L73.1235 75.4918Z"
              fill="#FFA000"
            />
            <path
              d="M27.9795 30.3478C28.3065 30.6748 28.7345 30.8383 29.1637 30.8383C29.5922 30.8383 30.0202 30.6754 30.3478 30.3478C31.0024 29.6944 31.0024 28.6341 30.3478 27.9801L26.9465 24.5788C26.292 23.9242 25.2328 23.9242 24.5788 24.5788C23.9242 25.2323 23.9242 26.2925 24.5788 26.9465L27.9795 30.3478Z"
              fill="#FFA000"
            />
          </>
        )}
        {icon == 'cloudySun' && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.1983 54.6198C45.4872 48.8005 51.7211 44.8574 58.8931 44.8574C68.9817 44.8574 77.2517 52.6439 78.0204 62.5358C83.138 63.2194 87.0852 67.6015 87.0847 72.9071M76.6501 65.6431C80.6489 65.6586 83.8851 68.9041 83.8847 72.9069V72.9071C83.8847 76.9188 80.6331 80.1711 76.6207 80.1711H23.4367C19.4246 80.1711 16.1727 76.9186 16.1727 72.9071C16.1727 68.8948 19.4241 65.6431 23.4367 65.6431C23.6265 65.6431 23.827 65.6555 24.0625 65.675C24.7883 65.7351 25.4631 65.2974 25.7042 64.6101C27.3051 60.0471 31.6357 56.7781 36.7321 56.7781C38.7001 56.7781 40.549 57.2686 42.1767 58.1277C42.5654 58.3328 43.0214 58.369 43.4376 58.2278C43.8538 58.0866 44.1935 57.7804 44.3772 57.3811C46.9079 51.8779 52.4518 48.0574 58.8931 48.0574C67.7105 48.0574 74.8605 55.1957 74.8787 64.0093C74.8784 64.0218 74.8781 64.0355 74.8781 64.0503C74.8781 64.4811 75.0519 64.8937 75.36 65.1947C75.6682 65.4958 76.0847 65.6599 76.5154 65.6498C76.5547 65.6489 76.5885 65.6471 76.6123 65.6457C76.6258 65.6448 76.6401 65.6438 76.6501 65.6431ZM42.1983 54.6198C40.5068 53.9497 38.6633 53.5781 36.7321 53.5781C30.6482 53.5781 25.4351 57.2301 23.1219 62.4477C17.4876 62.6141 12.9727 67.2329 12.9727 72.9071C12.9727 78.6858 17.6571 83.3711 23.4367 83.3711H76.6207C82.4006 83.3711 87.0846 78.686 87.0847 72.9073"
              fill="#273469"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30.7429 27.4852C27.8607 27.4852 25.5242 29.8215 25.5242 32.7032C25.5242 35.5852 27.8609 37.9219 30.7429 37.9219C33.6248 37.9219 35.9615 35.5852 35.9615 32.7032C35.9615 29.8215 33.625 27.4852 30.7429 27.4852ZM22.3242 32.7032C22.3242 28.0538 26.0938 24.2852 30.7429 24.2852C35.3919 24.2852 39.1615 28.0538 39.1615 32.7032C39.1615 37.3525 35.3921 41.1219 30.7429 41.1219C26.0936 41.1219 22.3242 37.3525 22.3242 32.7032Z"
              fill="#FFA000"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30.7445 16.7207C31.6282 16.7207 32.3445 17.437 32.3445 18.3207V21.1973C32.3445 22.081 31.6282 22.7973 30.7445 22.7973C29.8609 22.7973 29.1445 22.081 29.1445 21.1973V18.3207C29.1445 17.437 29.8609 16.7207 30.7445 16.7207Z"
              fill="#FFA000"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.4419 21.4016C20.0671 20.7771 21.0801 20.7777 21.7046 21.4028L23.737 23.4374C24.3615 24.0626 24.361 25.0756 23.7358 25.7001C23.1107 26.3246 22.0976 26.3241 21.4731 25.6989L19.4407 23.6644C18.8162 23.0392 18.8167 22.0261 19.4419 21.4016Z"
              fill="#FFA000"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.7617 32.7029C14.7621 31.8192 15.4787 31.1032 16.3623 31.1035L19.2395 31.1046C20.1232 31.105 20.8393 31.8216 20.8389 32.7053C20.8386 33.5889 20.122 34.305 19.2383 34.3046L16.3611 34.3035C15.4774 34.3032 14.7614 33.5866 14.7617 32.7029Z"
              fill="#FFA000"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.738 39.7087C24.3629 40.3335 24.363 41.3466 23.7382 41.9715L21.7042 44.006C21.0794 44.6309 20.0663 44.6311 19.4414 44.0063C18.8165 43.3815 18.8164 42.3685 19.4412 41.7436L21.4752 39.709C22.1 39.0841 23.1131 39.084 23.738 39.7087Z"
              fill="#FFA000"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30.7445 42.6094C31.6282 42.6094 32.3445 43.3257 32.3445 44.2094V47.0871C32.3445 47.9708 31.6282 48.6871 30.7445 48.6871C29.8609 48.6871 29.1445 47.9708 29.1445 47.0871V44.2094C29.1445 43.3257 29.8609 42.6094 30.7445 42.6094Z"
              fill="#FFA000"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M37.746 39.7089C38.3708 39.084 39.3839 39.084 40.0087 39.7089L42.0433 41.7434C42.6681 42.3683 42.6681 43.3813 42.0433 44.0062C41.4184 44.631 40.4054 44.631 39.7805 44.0062L37.746 41.9716C37.1211 41.3468 37.1211 40.3337 37.746 39.7089Z"
              fill="#FFA000"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M40.6484 32.7055C40.6484 31.8218 41.3648 31.1055 42.2484 31.1055H45.1251C46.0087 31.1055 46.7251 31.8218 46.7251 32.7055C46.7251 33.5891 46.0087 34.3055 45.1251 34.3055H42.2484C41.3648 34.3055 40.6484 33.5891 40.6484 32.7055Z"
              fill="#FFA000"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.0433 21.4022C42.6681 22.0271 42.6681 23.0401 42.0433 23.665L40.0087 25.6995C39.3839 26.3244 38.3708 26.3244 37.746 25.6995C37.1211 25.0747 37.1211 24.0616 37.746 23.4368L39.7805 21.4022C40.4054 20.7774 41.4184 20.7774 42.0433 21.4022Z"
              fill="#FFA000"
            />
            <ellipse
              cx="30.7411"
              cy="32.7098"
              rx="5.67857"
              ry="5.67857"
              fill="#FFA000"
            />{' '}
          </>
        )}
        {icon == 'rainy' && (
          <>
            <path
              d="M27.7523 37.755C23.3126 38.7801 20 42.76 20 47.5C20 53.0223 24.495 57.5 30.0073 57.5H72.4916C78.0189 57.5 82.4989 53.0123 82.4989 47.5C82.4989 42.8074 79.2511 38.8677 74.894 37.7901C74.9638 37.2851 74.9989 36.7728 74.9989 36.25C74.9989 30.0374 69.9615 25 63.7489 25C60.6842 25 57.9063 26.2249 55.8789 28.2126C53.4012 23.3399 48.3415 20 42.4989 20C34.2138 20 27.4989 26.7149 27.4989 35C27.4989 35.9425 27.5865 36.8627 27.7511 37.755H27.7523ZM27.7523 37.755C23.3126 38.7801 20 42.76 20 47.5C20 53.0223 24.495 57.5 30.0073 57.5H72.4916C78.0189 57.5 82.4989 53.0123 82.4989 47.5C82.4989 42.8074 79.2511 38.8677 74.894 37.7901C74.9638 37.2851 74.9989 36.7728 74.9989 36.25C74.9989 30.0374 69.9615 25 63.7489 25C60.6842 25 57.9063 26.2249 55.8789 28.2126C53.4012 23.3399 48.3415 20 42.4989 20C34.2138 20 27.4989 26.7149 27.4989 35C27.4989 35.9425 27.5865 36.8627 27.7511 37.755M27.7523 37.755C23.3126 38.7801 20 42.76 20 47.5C20 53.0223 24.495 57.5 30.0073 57.5H72.4916C78.0189 57.5 82.4989 53.0123 82.4989 47.5C82.4989 42.8074 79.2511 38.8677 74.894 37.7901C74.9638 37.2851 74.9989 36.7728 74.9989 36.25M27.7523 37.755C23.3126 38.7801 20 42.76 20 47.5C20 53.0223 24.495 57.5 30.0073 57.5H72.4916C78.0189 57.5 82.4989 53.0123 82.4989 47.5C82.4989 42.8074 79.2511 38.8677 74.894 37.7901C74.9638 37.2851 74.9989 36.7728 74.9989 36.25M27.7523 37.755C23.3126 38.7801 20 42.76 20 47.5C20 53.0223 24.495 57.5 30.0073 57.5H72.4916C78.0189 57.5 82.4989 53.0123 82.4989 47.5C82.4989 42.8074 79.2511 38.8677 74.894 37.7901C74.9638 37.2851 74.9989 36.7728 74.9989 36.25M27.7523 37.755C23.3126 38.7801 20 42.76 20 47.5C20 53.0223 24.495 57.5 30.0073 57.5H72.4916C78.0189 57.5 82.4989 53.0123 82.4989 47.5C82.4989 42.8074 79.2511 38.8677 74.894 37.7901C74.9638 37.2851 74.9989 36.7728 74.9989 36.25M27.7523 37.755C23.3126 38.7801 20 42.76 20 47.5C20 53.0223 24.495 57.5 30.0073 57.5H72.4916C78.0189 57.5 82.4989 53.0123 82.4989 47.5C82.4989 42.8074 79.2511 38.8677 74.894 37.7901C74.9638 37.2851 74.9989 36.7728 74.9989 36.25"
              fill="#273469"
            />
            <path
              d="M85.0002 47.5C85.0002 42.3723 81.9181 37.9648 77.4979 36.0374L77.4997 36.0374C77.387 28.5401 71.2742 22.5 63.752 22.5C61.1068 22.5 58.6348 23.2472 56.5371 24.5424C53.3445 20.2673 48.247 17.5 42.502 17.5C32.8368 17.5 25.002 25.3349 25.002 35C25.002 35.3477 25.012 35.6903 25.0321 36.0301C20.6018 37.9548 17.502 42.3727 17.502 47.5C17.502 54.4023 23.0822 60 29.9997 60H72.5025C79.4054 60 85.0002 54.39 85.0002 47.5Z"
              fill="#273469"
            />
            <path
              d="M35 63.7377C35 63.0402 35.5603 62.5 36.25 62.5C36.9202 62.5 37.5 63.0525 37.5 63.7377V68.76C37.5 69.4576 36.9397 69.9977 36.25 69.9977C35.5798 69.9977 35 69.4453 35 68.76V63.7377Z"
              fill="#1A96F0"
            />
            <path
              d="M42.5 68.7377C42.5 68.0402 43.0603 67.5 43.75 67.5C44.4202 67.5 45 68.0525 45 68.7377V73.76C45 74.4576 44.4397 74.9977 43.75 74.9977C43.0798 74.9977 42.5 74.4453 42.5 73.76V68.7377Z"
              fill="#1A96F0"
            />
            <path
              d="M50 63.7377C50 63.0402 50.5603 62.5 51.25 62.5C51.9202 62.5 52.5 63.0525 52.5 63.7377V68.76C52.5 69.4576 51.9397 69.9977 51.25 69.9977C50.5798 69.9977 50 69.4453 50 68.76V63.7377Z"
              fill="#1A96F0"
            />
            <path
              d="M57.5 68.7377C57.5 68.0402 58.0603 67.5 58.75 67.5C59.4202 67.5 60 68.0525 60 68.7377V73.76C60 74.4576 59.4397 74.9977 58.75 74.9977C58.0798 74.9977 57.5 74.4453 57.5 73.76V68.7377Z"
              fill="#1A96F0"
            />
            <path
              d="M65 63.7377C65 63.0402 65.5603 62.5 66.25 62.5C66.9202 62.5 67.5 63.0525 67.5 63.7377V68.76C67.5 69.4576 66.9397 69.9977 66.25 69.9977C65.5798 69.9977 65 69.4453 65 68.76V63.7377Z"
              fill="#1A96F0"
            />
          </>
        )}
      </svg>
    </div>
  )
}

export default WeatherIconWidget
