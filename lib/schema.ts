import { z } from 'zod'

export const FormDataSchema = z.object({
  Name: z.string().min(1, 'Name is required'),
  RollNumber: z.string().min(1, 'Roll Number is required'),
  Gender: z.string().min(1, 'Gender is required'),
  Year: z.string().min(1, 'Year is required'),
  YearOfRecruitment: z.string().min(1, 'Recruitment Year is required'),
  Stream: z.string().min(1, 'Stream is required'),
  Domain: z.string().min(1, 'Domain is required'),
})
