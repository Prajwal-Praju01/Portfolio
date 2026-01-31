export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-primary-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary-600 rounded-full animate-spin"></div>
        </div>
        <h2 className="text-xl font-semibold text-dark-900 mb-2">Loading...</h2>
        <p className="text-dark-600">Please wait a moment</p>
      </div>
    </div>
  )
}
