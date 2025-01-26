import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const loginResolver = zodResolver(loginSchema);
export type LoginSchema = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const registerResolver = zodResolver(registerSchema);
export type RegisterSchema = z.infer<typeof registerSchema>;
