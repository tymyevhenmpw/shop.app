"use client";

import { useState } from "react";

export const useServerState = (initialValue: any) => {
    const [state, setState] = useState(initialValue);
  
    return [state, setState];
};