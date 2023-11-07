// schema for sponsors

import { Schema, models, model, Document } from "mongoose";

export interface ISponsor extends Document {
  name: string;
  logo_URL: string;
  website_URL: string;
  description: string;
  signed_by: Schema.Types.ObjectId;
  signed_date: Date;
  end_date: Date;
  is_active: boolean; // for wheather the sponsor is active or not
  phone?: number;
  email?: string;
  sponsor_field?: "education" | "technology" | "finance" | "other";
}

const SponsorSchema = new Schema({
  name: { type: String, required: true },
  logo_URL: { type: String, required: true },
  website_URL: { type: String, required: true },
  description: { type: String, required: true },
  signed_by: { type: Schema.Types.ObjectId, required: true },
  signed_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  is_active: { type: Boolean, required: true },
  phone: { type: Number },
  email: { type: String },
  sponsor_field: {
    type: String,
    enum: ["education", "technology", "finance", "other"],
  },
});

const Sponsor = models.Event || model<ISponsor>("Event", SponsorSchema);
export default Sponsor;
