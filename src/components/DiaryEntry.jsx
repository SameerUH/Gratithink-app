import { useState } from "react";
import Mood from "./Mood";

function DiaryEntry(props) {
    const { entry, handleEdit, handleDelete } = props;

    const date = new Date(props.entry.time);
    const dateString = date.toDateString();
    const timeString = date.toLocaleTimeString();

    return (
        <div className='mb-4 p-4 w-full border rounded-md shadow-sm bg-white flex items-center justify-between'>
            <div className='flex-1'>
                <div className='text-sm text-gray-500 mb-2'>{dateString}: {timeString}</div>
                <div className='text-md text-gray-800 mb-1'>Studied: {props.entry.question1}</div>
                <div className='text-md text-gray-800 mb-1'>Day: {props.entry.question2}</div>
                <div className='text-md text-gray-800 mb-1'>Good: {props.entry.question3}</div>
                <div className='text-md text-gray-800 mb-1'>Mood: {props.entry.question4}</div>
                <div className='text-md text-gray-800'>Highlights: {Array.isArray(props.entry.question5) ? props.entry.question5.join(', ') : props.entry.question5}</div>
            </div>
            <div className='flex space-x-2'>
                <button
                    className='px-3 py-1 bg-blue-500 text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-600'
                    onClick={() => props.handleEdit(props.entry)}
                >
                    Edit
                </button>
                <button
                    className='px-3 py-1 bg-red-500 text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 hover:bg-red-600'
                    onClick={() => props.handleDelete(props.entry.time)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default DiaryEntry;