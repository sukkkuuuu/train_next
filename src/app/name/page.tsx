import Link from "next/link";

export default function Name({ params }: { params: { name: string } }) {
  return (
    <main>
      <h1 className="title">Name page</h1>
      <p className="msg">/name/OO 와 같이 이름을 붙여서 접속하세요.</p>
      <div>
        <Link href="/">go back!</Link>
      </div>
    </main>
  );
}
