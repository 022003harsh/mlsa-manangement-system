import { z } from 'zod'

export const FormDataSchemaMember = z.object({
  Name: z.string().min(1, 'Name is required'),
  RollNumber: z.string().min(1, 'Roll Number is required'),
  Gender: z.string().min(1, 'Gender is required'),
  Year: z.string().min(1, 'Year is required'),
  YearOfRecruitment: z.string().min(1, 'Recruitment Year is required'),
  Stream: z.string().min(1, 'Stream is required'),
  Domain: z.string().min(1, 'Domain is required'),
})


export const FormDataSchemaEvent = z.object({
  Name: z.string().min(1, 'Name is required'),
  Domain: z.string().min(1, 'Domain is required'),
  Date: z.string().min(1, 'Date is required'),
  TargetYear: z.string().min(1, 'Year is required'),
  ExpectedParticipants: z.string().min(1, 'Expected number is required'),
  ActualParticipants: z.string().min(1, 'Actual number is required'),
  Thumbnail: z.string().min(1, 'Thumbnail is required'),
})