import { PayloadAction } from "@reduxjs/toolkit";

export type TransferFilterPayload = PayloadAction<{
  id: string;
  value: number;
}>;
