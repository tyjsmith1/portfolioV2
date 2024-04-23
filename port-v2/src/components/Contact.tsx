"use client"
import React, {useState} from 'react';
import { FiSend } from "react-icons/fi";

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message })
        })

        const data = await response.json()
        if (response.ok) {
            console.log('Email sent successfully:', data)
            setName('')
            setEmail('')
            setMessage('')
        } else {
            console.error('Failed to send email:', data.error)
        }
    }
    return (
        <div className="mt-6" id="contact">
            <h1 className="border-b border-gray-200 text-3xl font-bold text-center mb-4 pb-4">Contact</h1>
            <p className="text-center mb-4 text-muted-foreground">Please contact me through this form!</p>
            <form onSubmit={handleSubmit} className="flex flex-col items-start w-full md:w-1/2 mx-auto">
                <label
                    htmlFor="name"
                    className="text-lg font-bold mb-3 block">
                    Full Name
                </label>
                <input 
                    className="mb-3 h-10 px-4 rounded-lg border w-full"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    maxLength={500}
                    placeholder="ex. John Smith"
                />
                <label
                    htmlFor="email"
                    className="text-lg font-bold mb-3 block">
                    Email Address
                </label>
                <input 
                    className="mb-3 h-10 px-4 rounded-lg border w-full"
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    maxLength={500}
                    placeholder="example@abc.com"
                />
                <label
                    htmlFor="message"
                    className="text-lg font-bold mb-3 block">
                    Message
                </label>
                <textarea
                    className="mb-3 h-52 rounded-lg border p-4 w-full"
                    name="message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Type your message"
                    required
                    maxLength={500}
                />
                <button 
                    type="submit"
                    className="
                        bg-red-400 text-white flex items-center justify-center w-[8rem]
                        px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50 
                        transition duration-150 ease-in-out outline-none
                        "
                >
                    Submit <FiSend className="ml-2"/>
                </button>
            </form>
        </div>
    )
}