import PhotoCarousel from "./components/PhotoCarousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="mt-4">
        <PhotoCarousel />
      </div>
      <div className="text-center lg:text-left">
        <h1>Austin Lindenberg</h1>
        <p>Age: 27 years old</p>
        <p>Origin: Melbourne Beach, FL</p>
        <p>Residence: San Diego, CA</p>
      </div>
    </main>
  );
}
