# 설치 및 빌드
> 



## A. Build 환경

사전에 (설치해야)갖추어야 할 개발도구는 다음과 같습니다.

| 개발도구 | 버전     |
| -------- | -------- |
| NodeJS   | v12.12.0 |
| NPM      | 6.11.3   |

#### Step1. NodeJS 설치 및 버전 변경

1. 터미널(명령 프롬프트)에서 NodeJS 가 사전에 설치되어 있는지 확인합니다.

- 버전 확인하는 명령어 실행 > ***$ node -v***

- 버전이 나오는 경우, 2는 Skip 후 3으로 넘어갑니다.

- 버전이 나오지 않는 경우, 2를 수행합니다.

2. https://nodejs.org/ko/download/ 로 이동하여 nodejs를 다운로드 받습니다.(버전 상관없이 최신 버전 설치)
   * 주의! : 맥북의 경우, 다운로드하여 설치하지 말고 터미널로 직접 설치해야 합니다.

3. 설치 완료 후, 터미널(명령 프롬프트)에서 NodeJS 버전을 v12.12.0 로 변경합니다.

- 버전 확인 ***$ node -v***

- npm cache clean > ***$ npm clean cache -f***

- n 설치(n이라는 package가 nodeJS의 버전별 설치를 가능하게 함) > ***$ npm install -g n***

- 버전 변경하기 > ***$ n 12.12.0***

- 버전이 12.12.0으로 변경되었는지 확인 > ***$ node -v***



#### Step2. NPM 설치 및 버전 변경.



1. Step1 을 따라했다면, npm이 설치되어 있을 겁니다.

2. 터미널에서 npm 의 버전을 확인합니다.

   \- 버전 확인하는 명령어 실행 > ***$npm -v***

3. npm 버전 업그레이드 또는 다운그레이드 > ***$ npm install -g npm@6.11.3***

4. 버전이 6.11.3로 변경되었는지 확인 > ***$ npm -v***



#### Step3. Frontend 소스코드 Clone.

1. 소스코드를 clone 합니다.

​    

## B. Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# storybook 실행 - 코딩 규칙, 스타일 가이드 확인
$ npm run storybook

# storybook 빌드
$ npm run storybook
```

   





