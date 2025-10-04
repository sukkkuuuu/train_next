"use server";

import Link from "next/link";

const paths = [{ name: "kim" }, { name: "lee" }, { name: "park" }];

export async function generateStaticParams() {
  return paths;
}

export default async function Name({ params }) {
  const result = paths.some((path) => path.name === params.name);

  return (
    <main>
      {result ? (
        <>
          <h1 className="title">Name = &apos;{params.name}&apos;</h1>
          <p className="msg">{params.name}님 안녕하세요 !</p>
        </>
      ) : (
        <>
          <h1 className="title">&apos;{params.name}&apos;</h1>
          <p className="msg">
            &apos;{params.name}&apos;은(는) 사용할 수 없습니다.
          </p>
        </>
      )}
      <div>
        <Link href="/">go Back!!</Link>
      </div>
    </main>
  );
}
