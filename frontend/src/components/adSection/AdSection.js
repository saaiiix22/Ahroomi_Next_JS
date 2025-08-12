import Link from "next/link";

export default function AdSection() {
  return (
    <div className='grid grid-cols-2 justify-center items-center gap-10 py-10'>
      <Link href="/products/face-oil">
        <img className='rounded-md' src='/images/faceOilAd.jpg' alt="Face Oil Ad" />
      </Link>

      <Link href="/products/another-ad">
        <img className='rounded-md' src='/images/hairOilAd.jpg' alt="Another Ad" />
      </Link>
    </div>
  );
}
