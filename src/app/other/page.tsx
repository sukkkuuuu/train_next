"use client";
// import "./style.css";
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.css";
import JSXStyle from "styled-jsx/style";
export default function Other() {
  return (
    <main>
      {/* style.css 사용 */}
      {/* <h1 className="title">Other Page</h1>
      <p className="msg">이건 다른 페이지입니다.</p> */}
      {/* Styled JSX : 아래와 같이 html <style></style> 형태로 css 설정가능
      원래 next.js에서는 불가능한데 Styled JSX을 통해 구현 가능 */}
      <JSXStyle>
        {`p.jsx-msg {
          margin: 10px;
          text-align : center;
          color : red;
          font-weight : bold;
          }`}
      </JSXStyle>
      {/* style.module.css 사용 : css 모듈 사용 */}
      <h1 className={styles.title}>Other Page</h1>
      <p className="jsx-msg">이건 다른 페이지입니다.</p>
      <div>
        <Image src="/globe.svg" alt="이미지" width={200} height={200} />
      </div>
      <div>
        <Link href="/">go back@!</Link>
      </div>
    </main>
  );
}
