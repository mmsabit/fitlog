
import Link from 'next/link';

const notFound = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#0c0d10] text-white">
      <h1 className="text-8xl font-bold">404</h1>

      <p className="mt-4 text-2xl">
        Page Not Found
      </p>

      <p className="mt-2 text-gray-400">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>

      <Link
        href="/"
        className="bg-[#ccff00] hover:bg-[#b8eb00] text-neutral-950 font-bold px-8 py-3.5 rounded-full text-sm sm:text-base shadow-lg transition-transform active:scale-95 mt-10"
      >
        Go Home
      </Link>
    </div>
    );
};

export default notFound;