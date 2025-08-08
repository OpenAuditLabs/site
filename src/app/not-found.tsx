export default function NotFound() {
    return (
         <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-cyan-950 to-purple-950 text-white px-4"
         >
      {/* Background 404 */}
      <div className="absolute font-sans text-[25vw] font-extrabold text-white/10 select-none z-0">
        404
      </div>

      {/* Foreground content */}
      <div className="relative z-10 text-center max-w-2xl">
        <p className="uppercase tracking-widest text-sm text-primary mb- font-sans">
          Error 404
        </p>
        <h1 className="text-3xl md:text-6xl font-bold mb-4 font-sans">
  404{" "}
  <span className="bg-gradient-to-r from-blue-500 to-chart-4 bg-clip-text text-transparent">
    Not Found
  </span>
</h1>
        <p className="text-sm text-gray-300 font-sans">
          The page you're looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>
      </div>
    </div>
    )
}
