"use client";

import Image from 'next/image';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { SetStateAction, useState } from 'react';
import GatherProductsInfo from './GatherProductsInfo';

const FetchUrl = () => {
  const [url, setUrl] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleFetchStart = () => {
    setUrl(inputValue);
  };

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <article className="w-full flex flex-1 gap-20 pt-12 mb-8">
        <div className="flex">
          <h2 className="text-heading2-semibold pr-2 drop-shadow-text-blue">Fetch products via XML link</h2>
          <Image src="/assets/thin-right-arrow.svg" width={32} height={32} alt="arrow-right" className="mt-1 max-[322px]:hidden" />
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <Input
            placeholder="Link"
            className="max-w-md"
            value={inputValue}
            onChange={handleChange}
          />
          <Button onClick={handleFetchStart}>Fetch link</Button>
          <p className="text-small-regular max-w-lg">
            Insert link with your XML code, to transfer products to your local database
          </p>
        </div>
      </article>
      <GatherProductsInfo url={url}/>
    </>
  );
};

export default FetchUrl;
