'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

interface ITestMessage {
  name?: string;
}

const TestMessage = ({ name }: ITestMessage) => {
  const searchParams = useSearchParams();

  const search = searchParams.get('search');

  return <p>{search}</p>;
};

export default React.memo(TestMessage);
