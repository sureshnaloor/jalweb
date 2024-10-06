import Link from 'next/link';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <Image
          src="/images/404-error.png"
          alt="page not found"
          width={300}
          height={300}
          className="mx-auto"
        />
        <div>
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>
        <div className="mt-5">
          <Link href="/" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;