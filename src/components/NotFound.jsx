export default function NotFound() {
  return (
    <div
      className="
      min-h-screen
      flex
      flex-col
      items-center
      justify-center
      bg-[#022b3a]
      text-white
      px-6
      text-center
      "
    >
      <h1 className="text-8xl font-bold text-[#bfdbf7]">
        404
      </h1>

      <h2 className="text-3xl md:text-4xl font-bold mt-4">
        Page Not Found
      </h2>

      <p className="mt-4 text-[#e1e5f2] max-w-lg">
        The page you are looking for doesn't exist
        or may have been moved.
      </p>

      <a
        href="/"
        className="
        mt-8
        bg-[#1f7a8c]
        hover:bg-[#056c92]
        px-8
        py-4
        rounded-xl
        font-semibold
        transition-all
        duration-300
        "
      >
        Back To Home
      </a>
    </div>
  );
}
