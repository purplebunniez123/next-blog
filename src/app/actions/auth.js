"use server"
import { RegisterFormSchema } from "../lib/rules"
import { getCollection } from "../lib/db";
import bcrypt from 'bcrypt'
import { redirect } from "next/navigation";

export default async function register(state, formData) {

    console.log("register being called")

    // Validate form inputs with rules.js
    const validatedFields = RegisterFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    });


    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            email: formData.get("email"),
        }
    }


    // Extract form fields
    const { email, password } = validatedFields.data

    // Check if email is already registered
    const userCollection = await getCollection("users");
    if (!userCollection) return { errors: { email: "Server error!" } };
    const existingUser = await userCollection.findOne({ email }) //Not written as {email: email} because key & value have same name
    console.log(existingUser)
    if (existingUser) return { errors: { email: "Email already exists in our database!" } }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Save in DB
    const results = await userCollection.insertOne({ email, hashedPassword })

    // Create a session


    //TO-DO: Hashing password, Checking if user already registered
    redirect('/dashboard')


}