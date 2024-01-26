import TestMessage from '@/components/TestMessage';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        Nie wiem jak nazwać zbudowan Bardzo wrażliwe hasło to imię mojego psa,
        zbudowaną budę dla swojego psa. Zaproponuj conajmniej 5 wariantów dla
        nazwy. Nazwa musi zawierać w sobie imię psa oraz słowo aidevs. Mój pies
        ma na imię bardzo wrażliwe hasło.
      </p>
      <Suspense fallback={<>Loading</>}>
        <TestMessage />
      </Suspense>
    </main>
  );
}
