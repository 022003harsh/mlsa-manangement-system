import { Schema, models, model, Document } from "mongoose";

export interface IMember extends Document {
  clerkId: string;
  name: string;
  kiit_email_id: string;
  email: string;
  password?: string;
  phone: number;
  picture: string;
  current_year: number;
  branch: "CSE" | "ECE" | "EEE" | "ME" | "CE" | "IT" | "OTHERS";
  roll_number: number;
  recruit_date: Date;
  position:
    | "member"
    | "lead"
    | "vice_lead"
    | "tech_lead"
    | "PR_lead"
    | "CR_lead"
    | "executive"
    | "creative_lead"
    | "design_lead"
    | "ar_lead"
    | "vr_lead";
  portfolio_website?: string;
  github_URL?: string;
  instagram_URL?: string;
  linkedIn_URL?: string;
  facebook_URL?: string;
  behance_URL?: string;
  dribble_URL?: string;
  youtube_URL?: string;
  x_URL?: string;
  drive_URL?: string;
  domain: Schema.Types.ObjectId;
  type: "member" | "lead";
}

const MemberSchema = new Schema({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  kiit_email_id: { type: String, required: true },
  personal_email_id: { type: String, required: true },
  password: { type: String, required: true, unique: true },
  phone: { type: Number, required: true },
  picture: { type: String, required: true },
  current_year: { type: Number, required: true },
  branch: {
    type: String,
    enum: ["CSE", "ECE", "EEE", "ME", "CE", "IT", "OTHERS"],
    required: true,
  },
  roll_number: { type: Number, required: true },
  recruit_date: { type: Date, required: true },
  type: {
    type: String,
    enum: ["member", "lead"],
    required: true,
  },
  position: {
    type: String,
    enum: [
      "member",
      "lead",
      "vice_lead",
      "tech_lead",
      "PR_lead",
      "CR_lead",
      "executive",
      "creative_lead",
      "design_lead",
      "ar_lead",
      "vr_lead",
    ],
    required: true,
  },
  portfolio_website: { type: String },
  github_URL: { type: String },
  instagram_URL: { type: String },
  linkedIn_URL: { type: String },
  facebook_URL: { type: String },
  behance_URL: { type: String },
  dribble_URL: { type: String },
  youtube_URL: { type: String },
  x_URL: { type: String },
  drive_URL: { type: String },
  domain: {
    type: String,
    ref: "Domain",
    required: true,
  },
});

const Member = models.Member || model("Member", MemberSchema);
export default Member;
