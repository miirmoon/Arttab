# ๐จ ArtTab

> ๋น์ ์ ์ธ์์ ์์ ์ ๋ด์๋ณด์ธ์.  
> ์๊ฐ์ ๋ณด๋ถํฐ ๊ทธ๋ฆผ ๊ตฌ์,ํ๋งค๊น์ง  
> ์ธ์์์ ๊ฐ์ฅ ๊ฐ๊น์ด ์ํธํ์ด Art Tab์ด ์ฌ๋ฌ๋ถ์ ์ฐพ์ ๊ฐ๋๋ค.

ArtTab์ `๊ทธ๋ฆผ์ ๊ณต์ ํ๊ณ  ์ถ์ดํ๋ ์ฌ๋๋ค์ ์ํ SNS`์์. ์ฌ๋ฌ ๊ทธ๋ฆผ์ ํ๋์ ๊ฐ์ํ๊ธฐ์ ์ต์ ํ๋ ์๋น์ค๋ฅผ ์ ๊ณตํฉ๋๋ค.

&nbsp;

## 1. ํ๋ก์ ํธ ๊ฐ์

### 1) ๊ธฐ๊ฐ

    2022. 1. 10.~2022. 2. 18.(๊ธฐํ 2์ฃผ, ์ค๊ณ 1์ฃผ, ๊ฐ๋ฐ 3์ฃผ)

### 2) ์ธ์

    6๋ช

### 3) ์ฃผ์ ๊ธฐ๋ฅ

- **๊ทธ๋ฆผ ํผ๋(feed)**
  - ์ฌ๋๋ค์ด ์ฌ๋ฆฐ ๊ทธ๋ฆผ๋ค์ ๋ชจ์ ํ ๋ฒ์ ๋ณผ ์ ์๋ค.(๋ฉ์ธ)
  - `feed`? ๋ด๊ฐ ์ฌ๋ฆฐ ์ ๋ณด๋ค(๊ทธ๋ฆผ)์ ๋์ ํ๋ก์์๊ฒ ์ ๋ฌํ๋ ๊ฒ!
- **๊ทธ๋ฆผ ๊ด๋ฆฌ**
  - ์ฌ์ฉ์๊ฐ ๊ทธ๋ฆฐ ๊ทธ๋ฆผ์ ๋ฑ๋ก, ์์ , ์ญ์ ํ  ์ ์๋ค.
  - ๋๊ธ๋ก ์๊ฐ์ ์ํตํ  ์ ์๋ค.
  - ์ข์ํ๋ ์๊ฐ๋ฅผ ํ๋ก์ฐํ  ์ ์๋ค.
  - ์ข์ํ๋ ์ํ์ ์ข์์๋ฅผ ํ  ์ ์๋ค.
- **๋ง์ด ๊ฐค๋ฌ๋ฆฌ**
  - ์ฌ์ฉ์๊ฐ ์ข์์ํ ์ํ์ผ๋ก ๋๋ง์ ๊ฐค๋ฌ๋ฆฌ๋ฅผ ๊พธ๋ฐ ์ ์๋ค.
- **์ฌ์ฉ์ ๊ด๋ฆฌ**
  - ์นด์นด์ค ๋ก๊ทธ์ธ์ ํ  ์ ์๋ค.

### 4) ๊ธฐ์ ์คํ

- **Frontend**: **Vue.js, TypeScript, SCSS**
- **Backend**: Spring Boot, JPA, MySQL

![image](https://user-images.githubusercontent.com/55578809/154552324-5d8f8611-c94e-4c6d-b5b8-21210778957f.png)

### 4-1) CI/CD

![image](https://user-images.githubusercontent.com/55578809/154552139-e673862e-f44e-48b2-9678-daad73a705a1.png)

### 5) ์ญํ  ๐ `Frontend`

#### Navbar, ๊ทธ๋ฆผ ์์ธ ์กฐํ, ๊ฐค๋ฌ๋ฆฌ ๊พธ๋ฏธ๊ธฐ ๊ธฐ๋ฅ ๊ตฌํ

- ์ข์์, ํ๋ก์ฐ ๋ฒํผ, ํ ์คํธ ๋ฉ์์ง ๋ฐ ๋น๋ฐ๋ฒํธ ์๋ ฅ์ฐฝ ๋ฑ์ ๋ค๋ฅธ ๊ณณ์์๋ ์ฌ์ฉํ  ์ ์๋๋ก ๊ตฌํํ์ต๋๋ค.
- ์ด๋์๋ ArtTab์ ํธ๋ฆฌํ๊ฒ ์ฌ์ฉํ  ์ ์๋๋ก ๋ฐ์ํ์ผ๋ก ๊ตฌํํ์ต๋๋ค.

#### ํ์๊ฐ์, ๋ก๊ทธ์ธ ๊ธฐ๋ฅ ๊ตฌํ

- ์ ๊ทํํ์์ ์ฌ์ฉํด์ ์ด๋ฉ์ผ ํ์์ ๊ฒ์ฌํ์ต๋๋ค.
- Kakao ๋ก๊ทธ์ธ API๋ฅผ ์ด์ฉํ์ฌ token์ ๋ฐ์์ ์์ ๋ก๊ทธ์ธ์ ๊ตฌํํ์ต๋๋ค.
- ๋ก๊ทธ์ธ ์ํ๋ฅผ Session Storage๋ก ๊ด๋ฆฌํ๊ณ , ๋ก๊ทธ์ธ ์ฌ๋ถ์ ๋ฐ๋ผ ํ์ด์ง ์ ๊ทผ์ ์ ํ(router guard)ํ๋๋ก ๊ตฌํํ์ต๋๋ค.

&nbsp;

## 2. ๊ธฐ๋ฅ ์๊ฐ ๐ผ๏ธ

### 1) ์นด์นด์ค ๋ก๊ทธ์ธ

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/55578809/154606515-9aeea3ea-b5b1-4f90-9a18-8c70ebc283dd.gif)

### 2) ๊ทธ๋ฆผ ํผ๋(feed) - ๋ฉ์ธ

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/55578809/154603822-1d981abb-2f10-41e2-beb7-371f1fb19218.gif)

### 3) ๊ทธ๋ฆผ ๋ฑ๋ก

![insert artwork (1)](https://user-images.githubusercontent.com/55578809/154597267-7ba9839e-e169-4bc3-adc5-9564bbc54607.gif)

### 4) ๊ทธ๋ฆผ ์ญ์ 

![delete artwork](https://user-images.githubusercontent.com/55578809/154598732-5f863a51-113d-4481-b2e8-dfc18dec32ed.gif)

### 5) ๋ง์ดํ์ด์ง

![updateInfo](https://user-images.githubusercontent.com/55578809/154598730-50b3b3da-b28f-4bb2-97eb-15453bab55c3.gif)

### 6) ๋ง์ด๊ฐค๋ฌ๋ฆฌ

![my gallery2 (1)](https://user-images.githubusercontent.com/55578809/154597931-14f173eb-9397-4344-905e-8ca7a330042a.gif)

### 7) ๋๊ธ, ์ข์์

![๋๊ธ,์ข์์](https://user-images.githubusercontent.com/55578809/154598208-aec68b88-aa6f-4913-8c1a-155636105edf.gif)

## 3. Team ใฝ๏ธ

| <img src="https://lab.ssafy.com/uploads/-/system/user/avatar/3706/avatar.png?width=400" width="230px;" alt="์ค์ฌ๋ฌธ"/> | <img src="https://secure.gravatar.com/avatar/d971e1b10959c5b19d0c6d98069b3d8d?s=800&d=identicon" width="230px;" alt="๋ฐ์ฐฝํ"/> | <img src="https://secure.gravatar.com/avatar/ec47db8d724e462e92c510a548279e62?s=800&d=identicon" width="230px;" alt="๋ฐํด์ธ"/> | <img src="https://secure.gravatar.com/avatar/45331f87f9cc8dd8fb042c0ff310d666?s=800&d=identicon" width="230px;" alt="๋ฐฐ๋์"/> | <img src="https://secure.gravatar.com/avatar/710ed197c74c72677243a59a3581afb6?s=800&d=identicon" width="230px;" alt="๋ฐฑ์ฒ ์ฐ"/> | <img src="https://secure.gravatar.com/avatar/98f66880dc16c2436bfe4369e878449e?s=800&d=identicon" width="230px;" alt="์ ๋ฏธ๋"/> |
| :-------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
|                                       [์ค์ฌ๋ฌธ](https://lab.ssafy.com/tph01198)                                        |                                            [๋ฐ์ฐฝํ](https://lab.ssafy.com/pch1656)                                             |                                       [๋ฐํด์ธ](https://lab.ssafy.com/haein.hannah.park)                                        |                                           [๋ฐฐ๋์](https://lab.ssafy.com/qoskdud15)                                            |                                            [๋ฐฑ์ฒ ์ฐ](https://lab.ssafy.com/backcy1)                                             |                                            [์ ๋ฏธ๋](https://lab.ssafy.com/sml6209)                                             |
|                                                        Backend                                                        |                                                            Backend                                                             |                                                            Frontend                                                            |                                                            Backend                                                             |                                                            Frontend                                                            |                                                            Frontend                                                            |
|                                                         ํ์ฅ                                                          |                                                          git, ์ธํ๋ผ                                                           |                                                             ๋์์                                                             |                                                          backend ํ์ฅ                                                          |                                                           jira ๋ด๋น                                                            |                                                           front ํ์ฅ                                                           |

&nbsp;

### โถ ํ ๊ท์น

- ๋ด๊ฐ ํ๋ฆด ์ ์๋ค.

- ๊ฐ์ธ์ ์ด์๋ ๋ชจ๋์ ์ด์

- ์ ํํ ๋ฆฌ์ก์, ํ์คํ ํผ๋๋ฐฑ

- 1์ผ 1์งํ์ฌํญ ์์ฑ

- ๋จ์ ์ผ์ ์๋ค.

&nbsp;

## 4. ํ๋ก์ ํธ ์งํ

### ๐ธ ์ค๊ณ๋

- [์์ด์ดํ๋ ์](https://www.figma.com/file/lfozAybsvjkkbNYzhUdi4l/%EB%B0%98%EB%B0%98%EB%A7%90%EB%A7%88%EB%8B%88?node-id=0%3A1)
- [ERD](https://www.erdcloud.com/d/gNfGpb3YLzHWH2cnw)
- [api ์ค๊ณ](https://documenter.getpostman.com/view/5813163/UVXqFYVJ)
- [ํ์ ๋ด์ฉ](https://haeinpark.notion.site/2-1-fdfb2b569362442ab99f07bb4a5aa04a)

### ๐ณ Git Convention

- `feat`: ์๋ก์ด ๊ธฐ๋ฅ ์ถ๊ฐ(a new feature)
- `fix`: ๋ฒ๊ทธ ์์ (a bug fix)
- `docs`: ๋ฌธ์ ์์ (changes to documentation)
- `style`: ์ฝ๋ ํฌ๋งทํ, ์ธ๋ฏธ์ฝ๋ก  ๋๋ฝ, ์ฝ๋ ๋ณ๊ฒฝ์ด ์๋ ๊ฒฝ์ฐ (formatting, missing semi colons, etc; no code change)
- `refactor`: ์ฝ๋ ๋ฆฌํฉํ ๋ง(refactoring production code), ๋ก์ง๊ณผ ๊ด๊ณ ์๋ ์์ค ์ฝ๋ ๊ฐ์ 
  ๋ถํ์ํ ํ์ผ ๋ฐ ์ฝ๋ ์ญ์ 
  ๋ผ์ฐํธ ์ค์  ํ์ผ ๋ณ๊ฒฝ
- `test`: ํ์คํธ ์ฝ๋, ๋ฆฌํํ ๋ง ํ์คํธ ์ฝ๋ ์ถ๊ฐ(adding tests, refactoring test; no production code change)
- `chore`: ๋น๋ ์๋ฌด ์์ , ํจํค์ง ๋งค๋์  ์์ , ๋ผ์ด๋ธ๋ฌ๋ฆฌ, ํ๊ฒฝ ์ค์  ํ์ผ(package.json, .config ๋ฑ) ์์  ๋ฑ
  updating build tasks, package manager configs, etc; no production code change
- `design`: CSS ๋ฑ ์ฌ์ฉ์ UI ๋์์ธ ๋ณ๊ฒฝ
- `comment`: ํ์ํ ์ฃผ์ ์ถ๊ฐ ๋ฐ ๋ณ๊ฒฝ
- `rename`: ํ์ผ ๋๋ ํด๋๋ช์ ์์ ํ๊ฑฐ๋ ์ฎ๊ธฐ๋ ์์๋ง ์ํํ ๊ฒฝ์ฐ
- `remove`: ํ์ผ์ ์ญ์ ํ๋ ์์๋ง ์ํํ ๊ฒฝ์ฐ
- `HOTFIX`: ๊ธํ๊ฒ ์น๋ช์ ์ธ ๋ฒ๊ทธ๋ฅผ ๊ณ ์ณ์ผ ํ๋ ๊ฒฝ์ฐ

&nbsp;

## 5. ๐ ๋ฐฐํฌ ๋ช๋ น์ด

### backend

`cd backend`

`chmod 777 gradlew`

`./gradlew clean bootjar`

`docker build -t arttab ./`

`docker ps -f name=arttab -q | xargs --no-run-if-empty docker container stop`

`docker container ls -a -f name=arttab -q | xargs -r docker container rm`

`docker run -d -p 9091:8080 -it -e TZ=Asia/Seoul -v /home/arttab/img:/img --name arttab arttab`

</br>

### frontend

`cd frontend`

`npm install`

`npm run build`

</br>
