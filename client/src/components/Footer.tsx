export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-100 bg-white">
      <div className="container mx-auto px-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Andrés Gómez Sarmiento.</p>
        <p className="mt-2 text-xs opacity-50">Designed with ❤️ and React</p>
      </div>
    </footer>
  );
}