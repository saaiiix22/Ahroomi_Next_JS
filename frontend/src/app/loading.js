export default function GlobalLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="ml-3 text-gray-700">Loading...</p>
    </div>
  )
}
