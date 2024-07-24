// app/page.tsx
import Header from "@/src/components/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="text-center">
        <h1 className="text-3xl">This is Home Page</h1>
      </div>
    </>
  );
}
