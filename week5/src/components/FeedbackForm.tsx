import { useState } from 'react';
import { sendFeedback } from '../services/api';

export function FeedbackForm() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseId, setResponseId] = useState<number | null>(null);

  const submitFeedback = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const data = await sendFeedback(title, message);
      setResponseId(data.id);
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-xl font-bold text-green-700 mb-2">
          Thank you for your feedback!
        </h2>
        <p className="text-gray-600">
          Your message was saved with ID: <span className="font-bold">{responseId}</span>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submitFeedback} className="bg-white p-8 rounded-xl shadow-lg border flex flex-col gap-4">
      <h2 className="text-xl font-bold">Give Feedback</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <textarea
        placeholder="Write your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 rounded h-24"
        required
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded font-bold">
        Submit Feedback
      </button>
    </form>
  );
}