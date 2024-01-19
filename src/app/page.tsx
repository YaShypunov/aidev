import TestMessage from '@/components/TestMessage';
import Image from 'next/image';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Testowy blog.</h1>
      <p>aidevs</p>
      <p>aidevs</p>
      <p>aidevs</p>
      <p>aidevs</p>
      <p>aidevs</p>
      <Suspense fallback={<>Loading</>}>
        <TestMessage />
      </Suspense>
    </main>
  );
}
