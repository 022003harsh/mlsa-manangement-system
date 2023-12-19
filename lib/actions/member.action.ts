import Member, { IMember } from "@/database/member.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";
import { CreateMemberParams } from "./shared.types";

// create member function
export async function createMember(memberData: IMember) {
  try {
    connectToDatabase(); // from mongoose.ts
    const newMember = await Member.create(memberData);
    return newMember;
  } catch (error) {
    // error handling
    console.log("Error in creating member", error);
    throw error;
  }
}

// get member by id
export async function getMemberById(params: any) {
  try {
    connectToDatabase();
    const { memberId } = params;
    const member = await Member.findOne({ clerkId: memberId });
    return member;
  } catch (error) {
    console.log("Error in getting member by id", error);
    throw error;
  }
}

// get all member
export async function getAllMember() {
  try {
    connectToDatabase();
    const members = await Member.find();
    return members;
  } catch (error) {
    console.log("Error in getting all member", error);
    throw error;
  }
}

// update member details
export async function updateMember(params: any) {
  try {
    connectToDatabase();
    const { clerkId, updateData, path } = params;
    await Member.findOneAndUpdate({ clerkId }, updateData, { new: true });
    revalidatePath(path);
  } catch (error) {
    console.log("Error in updating member details", error);
    throw error;
  }
}

// delete member
export async function deleteMember(params: any) {
  try {
    connectToDatabase();
    const { clerkId } = params;
    const user = await Member.findOneAndDelete({ clerkId });
    if (!user) {
      throw new Error("User not found");
    }
    // TODO: delete all user data

    const deletedMember = await Member.findByIdAndDelete(user._id);
    return deletedMember;
  } catch (error) {
    console.log("Error in deleting member", error);
    throw error;
  }
}
