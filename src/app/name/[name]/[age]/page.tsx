export default function Name({
  params,
}: {
  params: { name: string; age: number };
}) {
  return (
    <main>
      <h1 className="title">Name</h1>
      <p className="msg">
        당신은 '{params.name}'님이군요 '{params.age}'살입니다.
      </p>
      <div>
        <a href="/">go back!</a>
      </div>
    </main>
  );
}
