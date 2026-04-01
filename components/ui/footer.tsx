export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-8 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
          <p className="text-center text-sm text-indigo-200/40">
            © {new Date().getFullYear()} Sam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
